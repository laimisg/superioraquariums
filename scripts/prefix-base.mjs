// Preview-only helper: when deployed under a sub-path (GitHub Pages project site), prefix root-relative
// links in the built HTML. Not needed for superioraquariums.com (BASE_PATH unset).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (!base) process.exit(0);
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
let n = 0;
for (const f of walk('dist').filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(f, 'utf8');
  const out = html.replace(/(href|src|action)="\/(?!\/)([^"]*)"/g, (m, a, rest) => (`/${rest}`.startsWith(base + '/') || `/${rest}` === base ? m : `${a}="${base}/${rest}"`));
  if (out !== html) { writeFileSync(f, out); n++; }
}
console.log(`prefixed links in ${n} files with ${base}`);
