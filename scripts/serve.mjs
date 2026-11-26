import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const types={'.html':'text/html; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const p=path.resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));if(!p.startsWith(root+path.sep)){res.writeHead(403).end();return;}const data=await readFile(p);res.writeHead(200,{'Content-Type':types[path.extname(p)]||'application/octet-stream','Cache-Control':'no-store'}).end(data);}catch{res.writeHead(404).end('Not found');}}).listen(4173,'127.0.0.1',()=>console.log('Rescue Team demo: http://127.0.0.1:4173'));
