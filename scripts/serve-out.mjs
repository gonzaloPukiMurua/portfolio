// Minimal static server for the `out/` folder, used by Playwright and `npm start`.
// Behaves like the production host (Apache/LiteSpeed on Hostinger): a folder is
// served through its index.html, `/es` redirects to `/es/`, unknown paths get 404.html.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'out');
const port = Number(process.env.PORT ?? 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

async function kind(path) {
  try {
    const info = await stat(path);
    return info.isFile() ? 'file' : info.isDirectory() ? 'dir' : null;
  } catch {
    return null;
  }
}

createServer(async (request, response) => {
  const { pathname, search } = new URL(request.url ?? '/', 'http://localhost');
  const clean = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  const base = join(root, clean);
  const found = await kind(base);

  // Like Apache's DirectorySlash: `/es` -> `/es/`.
  if (found === 'dir' && !pathname.endsWith('/')) {
    response.writeHead(301, { Location: `${pathname}/${search}` });
    response.end();
    return;
  }

  let file = null;
  if (found === 'file') file = base;
  else if (found === 'dir' && (await kind(join(base, 'index.html'))) === 'file') file = join(base, 'index.html');

  const target = file ?? join(root, '404.html');
  response.writeHead(file ? 200 : 404, {
    'Content-Type': types[extname(target)] ?? 'application/octet-stream',
  });
  response.end(await readFile(target));
}).listen(port, () => console.log(`Serving out/ on http://localhost:${port}`));
