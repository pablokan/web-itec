import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';

const SRC = 'src/pages';
const OUT = 'site';
const ICONS = 'site/assets/icons';
const PARTIALS = {
  announcement: 'src/partials/announcement.html',
  header: 'src/partials/header.html',
  footer: 'src/partials/footer.html',
};

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const icon = (name, cls) => {
  let svg = readFileSync(join(ICONS, `${name}.svg`), 'utf8').trim();
  return svg.replace('<svg ', `<svg class="${cls}" aria-hidden="true" focusable="false" `);
};

let count = 0;
for (const page of walk(SRC)) {
  const rel = relative(SRC, page);
  const depth = rel.split('/').length - 1;
  const root = depth ? Array(depth).fill('..').join('/') : '.';

  let html = readFileSync(page, 'utf8');
  for (const [name, path] of Object.entries(PARTIALS)) {
    html = html.replaceAll(`{{> ${name}}}`, readFileSync(path, 'utf8'));
  }
  html = html.replaceAll(/\{\{icon:([a-z-]+):([^}]*)\}\}/g, (_, n, c) => icon(n, c));
  html = html.replaceAll('{{root}}', root);

  const out = join(OUT, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  count++;
}
console.log(`build: ${count} páginas generadas`);
