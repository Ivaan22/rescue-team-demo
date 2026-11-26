import test from 'node:test';
import assert from 'node:assert/strict';
import {validity,issues,seed} from '../domain.mjs';
test('expiration boundaries include today and 30 days, missing date requires attention',()=>{
 assert.equal(validity('', '2026-11-26').tone,'red');
 assert.equal(validity('2026-11-25','2026-11-26').tone,'red');
 assert.equal(validity('2026-11-26','2026-11-26').tone,'amber');
 assert.equal(validity('2026-12-26','2026-11-26').tone,'amber');
 assert.equal(validity('2026-12-27','2026-11-26').tone,'green');
});
test('missing resources and expired records remain pending even when checklist is complete',()=>{
 const state=seed(),s=state.services[0];s.checks.forEach(c=>c.done=true);s.people=[];s.equipment=[];
 assert.deepEqual(issues(s,state),['Asignar personal','Asignar equipos']);
 s.people=['p3'];s.equipment=['e4'];assert.equal(issues(s,state).length,2);
 s.people=['p1'];s.equipment=['e1'];assert.equal(issues(s,state).length,0);
 s.people=['unknown'];assert.equal(issues(s,state).length,1);
});
