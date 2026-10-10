/* Utilidades compartidas por la tienda (index.html) y el panel (admin.html) */
const PIELES = {normal:'Normal', seca:'Seca', grasa:'Grasa', mixta:'Mixta', sensible:'Sensible', acne:'Con acné', madura:'Madura'};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let MONEDA = '$';
const din = n => MONEDA + (Number(n) || 0).toFixed(2);
const hoy = () => { const d = new Date(); return new Date(d - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10); };
const fFecha = s => s ? new Date(s + 'T12:00').toLocaleDateString('es', {day:'numeric', month:'short', year:'numeric'}) : '';
const nid = p => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const guardarLocal = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const leerLocal = (k, d) => { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } };
const borrarLocal = k => { try { localStorage.removeItem(k); } catch {} };

function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => t.hidden = true, 3500);
}
/* src: dirección de la foto; si no hay, se dibuja una pastilla del color del jabón */
function fotoHTML(p, src = p.foto, cls = '') {
  if (src) return `<img src="${esc(src)}" alt="${esc(p.nombre)}" loading="lazy">`;
  return `<div class="pastilla ${cls}" style="background:${esc(p.color || '#b9c7b4')}">${esc((p.nombre || '?').trim()[0] || '?')}</div>`;
}
function abrir(html, alCargar) {
  const d = $('#dlg'); d.innerHTML = html;
  $$('[data-cerrar]', d).forEach(b => b.onclick = () => d.close());
  if (alCargar) alCargar(d);
  if (!d.open) d.showModal();
}
function copiarTexto(texto, aviso = 'Copiado') {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(texto).then(() => toast(aviso), () => mostrarParaCopiar(texto));
  mostrarParaCopiar(texto);
}
function mostrarParaCopiar(texto) {
  abrir(`<div class="dlg"><div class="dlg-cab"><h2>Copia el texto</h2><button class="cerrar" data-cerrar aria-label="Cerrar">×</button></div>
    <div class="dlg-cuerpo"><textarea class="inp" rows="10" readonly id="txt-copia">${esc(texto)}</textarea></div></div>`,
    d => setTimeout(() => $('#txt-copia', d).select(), 50));
}
