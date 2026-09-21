// Router por hash, sin librerias -- traduce entre el hash de la URL y el
// estado de pantalla de la app (currentScreen + el id que corresponda).
// Puro: no toca el DOM ni el estado global, solo convierte en los dos
// sentidos. Cubre solo las pantallas de nivel superior (no el modal de una
// posicion ni el detalle de un screener concreto).
//
// Las carteras se identifican por su GUID (portfolios.id), nunca por nombre:
// el nombre no es unico (nada lo impide, ni siquiera dentro de un mismo
// usuario) y puede cambiar si se renombra la cartera -- el GUID no cambia
// nunca. El acceso real lo sigue decidiendo Row Level Security en Supabase
// (owner_id = auth.uid()), no el hecho de que la URL sea o no adivinable.

export function hashForState(state){
  const { screen, portfolioId, ticker } = state || {};
  switch(screen){
    case 'portfolio': return portfolioId ? `#/cartera/${portfolioId}` : '#/';
    case 'mis-carteras': return '#/carteras';
    case 'explorar': return '#/explorar';
    case 'cuenta': return '#/cuenta';
    case 'screeners': return '#/screeners';
    case 'calendario': return '#/calendario';
    case 'visor': return ticker ? `#/accion/${encodeURIComponent(ticker)}` : '#/';
    default: return '#/';
  }
}

export function parseHash(hash){
  const path = String(hash || '').replace(/^#\/?/, '');
  const parts = path.split('/').filter(Boolean);
  if(parts.length === 0) return { screen:'home' };
  if(parts[0] === 'carteras') return { screen:'mis-carteras' };
  if(parts[0] === 'explorar') return { screen:'explorar' };
  if(parts[0] === 'cuenta') return { screen:'cuenta' };
  if(parts[0] === 'screeners') return { screen:'screeners' };
  if(parts[0] === 'calendario') return { screen:'calendario' };
  if(parts[0] === 'cartera' && parts[1]) return { screen:'portfolio', portfolioId: parts[1] };
  if(parts[0] === 'accion' && parts[1]) return { screen:'visor', ticker: decodeURIComponent(parts[1]) };
  return { screen:'home' };
}
