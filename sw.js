/* Service worker: permite abrir la app sin internet.
   Archivos de la app: primero la red (para recibir actualizaciones) y, sin conexión, la copia guardada.
   Fotos y tipografías: primero la copia guardada. GitHub (api.github.com) nunca se guarda aquí. */
const CACHE = 'jabones-v2';
const BASE = ['admin', 'comun.js', 'estilos.css', 'manifest.webmanifest', 'icono-192.png', 'icono-512.png', 'logo.png'];

// Una respuesta que vino de una redirección no se puede usar para abrir la página: se copia sin ella
async function limpiar(r) {
  if (!r.redirected) return r;
  return new Response(await r.blob(), {status:r.status, statusText:r.statusText, headers:r.headers});
}

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await Promise.all(BASE.map(async u => { try { const r = await fetch(u, {cache:'reload'}); if (r.ok) await c.put(u, await limpiar(r)); } catch {} }));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

async function primeroRed(req) {
  const c = await caches.open(CACHE);
  try {
    const r = await fetch(req);
    if (r.ok) c.put(req, await limpiar(r.clone()));
    return await limpiar(r);
  } catch {
    const m = await c.match(req, {ignoreSearch:true});
    if (m) return m;
    if (req.mode === 'navigate') return (await c.match('admin')) || Response.error();
    return Response.error();
  }
}
async function primeroCache(req) {
  const c = await caches.open(CACHE);
  const m = await c.match(req);
  if (m) return m;
  const r = await fetch(req);
  if (r.ok || r.type === 'opaque') c.put(req, r.clone());
  return r;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    e.respondWith(url.pathname.includes('/fotos/') ? primeroCache(req) : primeroRed(req));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(primeroCache(req));
  }
});
