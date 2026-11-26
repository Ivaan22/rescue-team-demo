export const localDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
export const shiftDate = n => { const d=new Date(); d.setDate(d.getDate()+n); return localDate(d); };
export function validity(date,today=localDate()) {
  if(!date) return {label:'Sin documentación',tone:'red'};
  if(date < today) return {label:'Vencido',tone:'red'};
  const limit=new Date(`${today}T12:00:00`); limit.setDate(limit.getDate()+30);
  return date<=localDate(limit) ? {label:'Por vencer',tone:'amber'} : {label:'Vigente',tone:'green'};
}
export function issues(service,state) {
  const result=[];
  if(!service.people.length) result.push('Asignar personal');
  if(!service.equipment.length) result.push('Asignar equipos');
  for(const id of service.people) { const p=state.people.find(x=>x.id===id); if(!p || validity(p.expires).tone==='red') result.push(`Revisar documentación de ${p?.name||'personal no encontrado'}`); }
  for(const id of service.equipment) { const e=state.equipment.find(x=>x.id===id); if(!e || validity(e.expires).tone==='red') result.push(`Revisar inspección de ${e?.name||'equipo no encontrado'}`); }
  service.checks.forEach(c=>{if(!c.done) result.push(c.label);});
  return result;
}
export function seed() {
  return {version:1,people:[
    {id:'p1',name:'Martín Acosta',role:'Coordinador del servicio',training:'Registro de formación interna',expires:shiftDate(180),initials:'MA'},
    {id:'p2',name:'Lucía Benítez',role:'Técnica de rescate',training:'Constancia de capacitación técnica',expires:shiftDate(18),initials:'LB'},
    {id:'p3',name:'Nicolás Ríos',role:'Técnico de rescate',training:'Constancia de capacitación técnica',expires:shiftDate(-5),initials:'NR'},
    {id:'p4',name:'Paula Costa',role:'Instructora',training:'Registro de formación interna',expires:shiftDate(210),initials:'PC'}
  ],equipment:[
    {id:'e1',name:'Kit de rescate vertical',code:'RT-EQ-001',category:'Rescate',expires:shiftDate(120)},
    {id:'e2',name:'Detector multigás',code:'RT-EQ-002',category:'Medición',expires:shiftDate(12)},
    {id:'e3',name:'Trípode de rescate',code:'RT-EQ-003',category:'Rescate',expires:shiftDate(150)},
    {id:'e4',name:'Equipo de respiración',code:'RT-EQ-004',category:'Protección',expires:shiftDate(-3)}
  ],services:[
    {id:'RT-001',title:'Asistencia en espacio confinado',client:'Planta Industrial Norte · ejemplo',location:'Rosario, Santa Fe',date:shiftDate(1),type:'Asistencia operativa',status:'Planificado',owner:'Martín Acosta',people:['p1','p2'],equipment:['e2','e3'],checks:[{label:'Documentación del cliente recibida',done:true},{label:'Alcance revisado por el responsable',done:true},{label:'Plan de intervención adjunto al legajo',done:false}],notes:'Reunión de coordinación previa con el referente de planta. Confirmar documentación solicitada antes del servicio.',photos:[],activities:[]},
    {id:'RT-002',title:'Formación de brigada interna',client:'Centro Logístico Sur · ejemplo',location:'San Lorenzo, Santa Fe',date:shiftDate(3),type:'Capacitación',status:'Planificado',owner:'Paula Costa',people:['p4'],equipment:['e1'],checks:[{label:'Documentación del cliente recibida',done:true},{label:'Alcance revisado por el responsable',done:true},{label:'Programa de capacitación incorporado',done:true}],notes:'Jornada de práctica y registro de participantes. Material demostrativo.',photos:[],activities:[]},
    {id:'RT-003',title:'Acompañamiento de tareas en altura',client:'Complejo Talleres Oeste · ejemplo',location:'Rosario, Santa Fe',date:shiftDate(5),type:'Asistencia operativa',status:'En preparación',owner:'Martín Acosta',people:['p1','p3'],equipment:['e1','e4'],checks:[{label:'Documentación del cliente recibida',done:false},{label:'Alcance revisado por el responsable',done:true},{label:'Plan de intervención adjunto al legajo',done:false}],notes:'Revisar documentación del personal y registros de equipos asignados.',photos:[],activities:[]}
  ]};
}
