import { tools, categories, inCat, PAIRS, bySlug, SITE } from '../lib/data.js';
export function GET(){
let s=`# Build Stack\n\n> Ranked directory of AI tools for vibe coding and building (AI app builders, coding agents/IDEs, design-to-code, no-code, backend/deploy). Scores (0-100 Build Score) are initial editorial assessments as of 2026-10-15; sponsors never affect rankings.\n\n- [Methodology](${SITE}/methodology/)\n- [Full data (JSON)](${SITE}/tools.json)\n\n`;
for(const c of categories){ s+=`## ${c.name}\n\n`; for(const t of inCat(c.slug)) s+=`- [${t.name}](${SITE}/tools/${t.slug}/): ${t.score}/100. ${t.verdict}\n`; s+='\n'; }
s+='## Comparisons\n\n'+PAIRS.map(([a,b])=>`- [${bySlug(a).name} vs ${bySlug(b).name}](${SITE}/compare/${a}-vs-${b}/)`).join('\n')+'\n';
return new Response(s,{headers:{'Content-Type':'text/plain; charset=utf-8'}}); }
