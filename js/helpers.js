// Funciones puras de formato/parseo compartidas por toda la app -- sin
// estado, sin dependencias de Supabase ni del DOM. Extraido de dashboard.html.

export function esc(s){
  if(s===null||s===undefined) return '';
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
export function fmtEUR(n){ return Math.round(n).toLocaleString('es-ES') + ' €'; }
export function fmtNum(n){ return n==null ? '—' : n.toLocaleString('es-ES', {maximumFractionDigits:2}); }
export function fmtPct(n){ return (Math.round(n*10)/10).toString().replace('.',',') + '%'; }
export function gainChip(g, size){
  const color = g==null ? 'var(--text-dim)' : (g>=0 ? 'var(--green)' : 'var(--red)');
  const bg = g==null ? 'var(--panel)' : (g>=0 ? 'var(--green-soft)' : 'var(--red-soft)');
  const border = g==null ? 'var(--border)' : (g>=0 ? 'var(--green-border)' : 'var(--red-border)');
  const label = g==null ? '—' : (g>=0?'+':'')+g+'%';
  return `<div style="font-family:'Manrope',system-ui,sans-serif;font-weight:800;font-size:${size}px;padding:5px 13px;border-radius:20px;background:${bg};border:1px solid ${border};color:${color};white-space:nowrap;flex-shrink:0;">${label}</div>`;
}
export function num(v){ if(v===null||v===undefined) return null; let s=String(v).trim(); if(s==='') return null; s=s.replace('€','').replace('$','').replace(/\s/g,''); if(s.includes(',')&&s.includes('.')){ s=s.replace(/\./g,'').replace(',','.'); } else if(s.includes(',')){ s=s.replace(',','.'); } else if(/^-?[1-9]\d{0,2}(\.\d{3})+$/.test(s)){ s=s.replace(/\./g,''); } const n=parseFloat(s); return isNaN(n)?null:n; }
