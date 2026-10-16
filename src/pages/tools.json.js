import { tools, SITE } from '../lib/data.js';
export function GET(){ return new Response(JSON.stringify({source:SITE,updated:'2026-10-15',note:'Scores are initial editorial assessments.',tools:tools.map(t=>({...t,page:`${SITE}/tools/${t.slug}/`}))},null,1),{headers:{'Content-Type':'application/json'}}); }
