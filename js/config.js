// Tablas de configuracion estatica compartidas por toda la app -- sin
// logica, solo datos. Extraido de dashboard.html.

import { fmtPct, fmtEUR } from './helpers.js';

export const MARKET = {
  eeuu:{label:'EEUU',color:'#5B8DEF'}, europa:{label:'Europa',color:'#2FBF9F'},
  canada:{label:'Canadá',color:'#B79CED'},
  taiwan:{label:'Taiwán (ADR)',color:'#8A94A0'}, cripto:{label:'Cripto',color:'#F7931A'}
};

export const TIER = {
  nucleo:{label:'Núcleo · bajo riesgo',color:'#4ADE80'},
  crecimiento:{label:'Crecimiento · riesgo medio',color:'#FBBF24'},
  beta:{label:'Alto beta · riesgo elevado',color:'#F87171'},
  satelite:{label:'Satélite · muy especulativo',color:'#F87171'}
};

export const RULE_METRIC = {
  gain_pct: {label:'Ganancia %', fmt:v=>(v>=0?'+':'')+fmtPct(v)},
  gain_eur: {label:'Ganancia €', fmt:v=>(v>=0?'+':'')+fmtEUR(v)},
  loss_pct: {label:'Pérdida %', fmt:v=>(v>=0?'-':'+')+fmtPct(Math.abs(v))},
  loss_eur: {label:'Pérdida €', fmt:v=>(v>=0?'-':'+')+fmtEUR(Math.abs(v))},
  weight_deviation: {label:'Desviación del peso objetivo', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+' pp'},
  annualized_return: {label:'Rentabilidad anualizada', fmt:v=>(v>=0?'+':'')+fmtPct(v)},
  holding_age_days: {label:'Antigüedad de la posición', fmt:v=>Math.round(v)+' días'},
  horizon_proximity_years: {label:'Años hasta el horizonte', fmt:v=>Math.round(v)+' años'},
  drawdown_90d_pct: {label:'Caída desde máximo 90d (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%'}
};

export const METRIC_INFO = {
  marketCap: 'Valor total de mercado de la empresa (precio × nº de acciones). Mayor tamaño suele implicar más estabilidad, pero también menos margen de crecimiento porcentual.',
  pe: 'Precio entre beneficio por acción. Un P/E más bajo suele leerse como "más barato" en relación al beneficio actual, aunque también puede reflejar que el mercado espera menos crecimiento futuro.',
  peForward: 'Igual que el P/E pero con el beneficio estimado a futuro, no el actual. Si es menor que el P/E normal, el mercado espera que el beneficio crezca.',
  peg: 'P/E dividido entre el crecimiento esperado del beneficio. Por debajo de 1 suele considerarse barato en relación a su crecimiento; por encima de 2, caro.',
  ps: 'Precio entre ingresos por acción. Útil para empresas que aún no son rentables (sin P/E). Cuanto más bajo, más barata en relación a lo que factura.',
  pb: 'Precio entre valor contable (activos menos deudas) por acción. Por debajo de 1 puede indicar que cotiza por debajo de su valor en libros; muy alto, mucha confianza del mercado en el futuro.',
  netMargin: 'Porcentaje de los ingresos que se convierte en beneficio neto. Cuanto más alto, más eficiente es la empresa convirtiendo ventas en beneficio.',
  opMargin: 'Porcentaje de los ingresos que queda como beneficio operativo, antes de intereses e impuestos. Más alto suele indicar un negocio más eficiente.',
  roe: 'Rentabilidad sobre el capital de los accionistas. Más alto suele leerse como mejor uso del capital, aunque un ROE muy alto también puede deberse a mucha deuda.',
  roa: 'Rentabilidad sobre el total de activos de la empresa. Más alto indica que genera más beneficio por cada euro de activos que tiene.',
  revGrowth: 'Variación interanual de los ingresos. Positivo y creciente suele leerse como buena señal; negativo, como contracción del negocio.',
  earnGrowth: 'Variación interanual del beneficio. Positivo y creciente suele leerse como buena señal; negativo, como deterioro de la rentabilidad.',
  beta: 'Mide cuánto se mueve la acción en relación al mercado general. Por encima de 1, más volátil que el mercado; por debajo de 1, más estable.',
  eps: 'Beneficio neto por acción, en la divisa de cotización. Cuanto más alto y más crece con el tiempo, mejor en términos absolutos.',
  divPerShare: 'Cantidad que la empresa paga en dividendos por cada acción, al año.',
  divYield: 'Dividendo anual entre precio actual. Un yield muy alto a veces señala que el precio ha caído mucho (riesgo), no solo generosidad de la empresa.',
  targetPrice: 'Media de las estimaciones de precio de los analistas que cubren la acción, normalmente a 12 meses. Por encima del precio actual sugiere que ven recorrido al alza; por debajo, lo contrario.',
  recommendations: 'Reparto de las recomendaciones de los analistas que cubren la acción, de venta fuerte a compra fuerte.',
  rsi: 'Indicador técnico entre 0 y 100 que mide la fuerza y velocidad de los movimientos recientes de precio. Por encima de 70 se suele leer como "sobrecompra" (ha subido mucho y rápido); por debajo de 30, "sobreventa". No implica automáticamente comprar ni vender.',
  w10: 'Precio medio de cierre de las últimas 10 semanas. Media corta, reacciona rápido a cambios de tendencia — muy usada en el análisis de "stage analysis" de Stan Weinstein.',
  w50: 'Precio medio de cierre de las últimas 50 semanas (~1 año). Cuando el precio cotiza por encima, suele leerse como tendencia alcista de medio plazo; por debajo, bajista.',
  w200: 'Precio medio de cierre de las últimas 200 semanas (~4 años). Media muy larga, usada para identificar la tendencia estructural de fondo.',
};

export const RULE_OPERATOR = { gt:'mayor que', lt:'menor que' };

export const RULE_ACTION = {
  comprar:'Comprar', recomprar:'Recomprar', reducir:'Reducir',
  vender:'Vender (stop-loss)', revisar_tesis:'Revisar tesis', otra:'Otra'
};

export const STRATEGY = {
  value: { label:'Value investing', info:'Buscas empresas que cotizan por debajo de su valor intrínseco. El mercado las ha penalizado temporalmente pero el negocio subyacente es sólido. Compras con margen de seguridad y esperas a que el mercado corrija la infravaloración.' },
  growth: { label:'Growth investing', info:'Pagas múltiplos altos por empresas que crecen muy rápido. La apuesta es que el crecimiento futuro justifica el precio actual. Típico en sectores tecnológicos y de salud.' },
  garp: { label:'GARP', info:'Growth at a Reasonable Price. Híbrido entre value y growth. Quieres crecimiento pero con un límite de cuánto pagas por él. Ni tan barato como el value puro ni tan caro como el growth puro.' },
  quality: { label:'Quality investing', info:'Seleccionas por métricas de calidad: ROIC alto, márgenes estables, poca deuda, ventaja competitiva clara. Sin importar mucho si está "barata" o "cara", priorizas la excelencia del negocio.' },
  dividends: { label:'Dividendos', info:'Buscas empresas con historial de dividendo creciente y sostenible. El objetivo es construir una renta pasiva que crezca con el tiempo. Ideal para inversores que buscan flujo de caja regular.' },
  momentum: { label:'Momentum', info:'Compras lo que está subiendo técnicamente, sin análisis del negocio. Funciona en mercados alcistas, destruye capital en correcciones bruscas. Puramente basado en precio y volumen.' },
  contrarian: { label:'Contrarian', info:'Compras lo que nadie quiere y vendes lo que todos adoran. Requiere convicción y estómago para aguantar que el mercado te lleve la contraria durante meses.' },
  event_driven: { label:'Event-driven', info:'Te posicionas antes de eventos concretos: resultados trimestrales, fusiones, spin-offs, cambios de directiva. Requiere información muy actualizada y reacción rápida.' },
  deep_value: { label:'Deep value', info:'Versión extrema del value investing. Buscas empresas muy deterioradas o casi ignoradas donde el mercado ha sobrerreaccionado a la baja. Alto riesgo, alto potencial si aciertas.' },
  swing_trading: { label:'Intradía y swing trading', info:'Especulación a corto plazo basada en movimientos del precio. Técnicamente no es inversión sino especulación, pero se practica ampliamente con acciones.' },
  materias_primas: { label:'Materias primas', info:'Inviertes en activos físicos (oro, plata...) como reserva de valor y cobertura frente a inflación, devaluación de divisa o inestabilidad geopolítica. No hay tesis de negocio ni flujos de caja que analizar: el valor viene de la escasez y la demanda física del activo.' },
  criptomonedas: { label:'Criptomonedas', info:'Inviertes en criptoactivos como reserva de valor alternativa o apuesta especulativa de alto riesgo, según el activo. Sin balance ni flujos de caja: el valor depende de la adopción, la oferta programada y el sentimiento de mercado.' },
};

export const EVENT_TYPE = {
  resultados: 'Resultados',
  dividendo: 'Dividendo',
  junta: 'Junta de accionistas',
  split: 'Split / contrasplit',
  nota_posicion: 'Nota Posición',
  otro: 'Otro',
  macro: 'Macro',
};

// 'macro' es solo para eventos globales (ej. FOMC) sembrados en
// calendar_events_global — no debe poder elegirse al crear un evento propio.
export const USER_EVENT_TYPES = Object.fromEntries(Object.entries(EVENT_TYPE).filter(([k])=>k!=='macro'));

export const SCREENER_METRIC = {
  rsi14: {label:'RSI (14)', fmt:v=>v.toFixed(1), get:r=>r.rsi14},
  price_vs_sma50: {label:'Precio vs SMA50 (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%', get:r=> r.sma50 ? ((r.last_price-r.sma50)/r.sma50)*100 : null},
  price_vs_sma200: {label:'Precio vs SMA200 (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%', get:r=> r.sma200 ? ((r.last_price-r.sma200)/r.sma200)*100 : null},
  day_change_pct: {label:'Variación diaria (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%', get:r=>r.day_change_pct},
  volume_ratio: {label:'Volumen vs media 30d (x)', fmt:v=>v.toFixed(2)+'x', get:r=> r.avg_volume_30d ? r.volume/r.avg_volume_30d : null},
  week52_high_pct: {label:'Distancia al máximo 52 sem (%)', fmt:v=>v.toFixed(1)+'%', get:r=> r.week52_high ? ((r.last_price-r.week52_high)/r.week52_high)*100 : null},
  week52_low_pct: {label:'Distancia al mínimo 52 sem (%)', fmt:v=>v.toFixed(1)+'%', get:r=> r.week52_low ? ((r.last_price-r.week52_low)/r.week52_low)*100 : null},
  pe_ratio: {label:'PER', fmt:v=>v.toFixed(1), get:r=>r.pe_ratio},
  market_cap: {label:'Capitalización (miles de M$)', fmt:v=>v.toFixed(1), get:r=> r.market_cap ? r.market_cap/1e9 : null},
  revenue_growth: {label:'Crecimiento ingresos YoY (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%', get:r=> r.revenue_growth!=null ? r.revenue_growth*100 : null},
  eps_growth: {label:'Crecimiento beneficios (EPS) YoY (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%', get:r=> r.eps_growth!=null ? r.eps_growth*100 : null},
  gross_margin: {label:'Margen bruto (%)', fmt:v=>v.toFixed(1)+'%', get:r=>r.gross_margin},
  eps_growth_5y: {label:'Crecimiento EPS 5 años (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%', get:r=>r.eps_growth_5y},
  debt_to_equity: {label:'Deuda / Equity', fmt:v=>v.toFixed(2), get:r=>r.debt_to_equity},
  performance_1y: {label:'Rendimiento a 1 año (%)', fmt:v=>(v>=0?'+':'')+v.toFixed(1)+'%', get:r=>r.performance_1y},
  last_price: {label:'Precio ($)', fmt:v=>v.toFixed(2), get:r=>r.last_price},
};

export const SCREENER_OPERATOR = { gt:'mayor que', lt:'menor que' };

export const SCREENER_UNIVERSE = {
  all: { label:'Todos los índices', short:'Todos' },
  sp500: { label:'S&P 500 (EEUU)', short:'S&P 500', color:'#5B8DEF' },
  sp600: { label:'S&P 600 (small caps EEUU)', short:'S&P 600', color:'#9B6BD9' },
  russell2000: { label:'Russell 2000 (small caps EEUU)', short:'Russell 2000', color:'#E0A030' },
  stoxx600: { label:'Stoxx 600 (Europa)', short:'Stoxx 600', color:'#4AAE00' },
};

export const PORTFOLIO_CATEGORY = {
  crecimiento:{label:'Crecimiento'},
  valor:{label:'Valor'},
  dividendos:{label:'Dividendos'},
  indexada:{label:'Indexada'},
  especulativa:{label:'Especulativa'},
  diversificada:{label:'Diversificada'}
};

export const SENS = {
  'Tech / IA':{ai:2,rates:-1,recession:-1,aireg:-1,dollar:-1,credit:-1},
  'Semiconductores':{ai:2,taiwan:-2,china:-1,rates:-1,recession:-1,tariffs:-1},
  'Software empresarial':{ai:1,rates:-1,aireg:-1},
  'Ciberseguridad':{cyber:2,rates:-1},
  'Computación cuántica':{ai:1,quantumbreak:2,rates:-2,recession:-2,aireg:-1},
  'Industria / automatización':{labor:2,reshoring:1,rates:-1,recession:-1},
  'Química / materiales':{ai:1,taiwan:-1,reshoring:1,rates:-1},
  'Electrificación de centros de datos':{ai:2,rates:-1,recession:-1},
  'Redes / conectividad':{ai:2,rates:-1,recession:-1,china:-1},
  'Real estate de centros de datos (REIT)':{ai:2,rates:-2,recession:-1},
  'Energía':{oil:2,recession:-1,energytransition:-2,war:1,inflation:1},
  'Minería / uranio':{oil:1,dollar:-1,recession:-1,ev:1,nuclear:2,reshoring:1,inflation:1},
  'Banca':{rates:2,credit:-2,recession:-1,inflation:1},
  'Defensa':{war:2,oil:1,recession:1},
  'Transporte / logística':{oil:-1,recession:-1,reshoring:1,tariffs:-1},
  'Automóviles':{oil:1,rates:-1,recession:-1,ev:-1,tariffs:-1},
  'Marítimo':{oil:2,recession:-1,tariffs:-1,taiwan:-1,war:1},
  'Consumo defensivo':{recession:2,ai:1,oil:-1,inflation:-1,pandemic:1},
  'Consumo discrecional':{recession:-2,oil:-1,rates:-1,luxury:2,china:-1},
  'Salud':{recession:2,pandemic:1,regulation:-1},
  'Pagos / fintech':{recession:-1,crypto:-1},
  'Infraestructura / agua':{rates:-1,climate:1},
  'Criptomonedas':{crypto:-3,rates:-1,recession:-1,regulation:-1,dollar:-1},
  'Metales preciosos (oro/plata)':{recession:2,inflation:2,dollar:-2,rates:-1,war:1}
};

export const SCENARIOS = [
  {key:'ai_down',label:'Corrección en IA',f:{ai:-2}},
  {key:'ai_up',label:'IA acelera más de lo esperado',f:{ai:2}},
  {key:'oil_up',label:'Petróleo sube (Irán/Venezuela)',f:{oil:2}},
  {key:'oil_down',label:'Petróleo se desploma',f:{oil:-2}},
  {key:'rates_up',label:'Suben los tipos',f:{rates:2}},
  {key:'rates_down',label:'Bajan los tipos',f:{rates:-2}},
  {key:'recession',label:'Recesión global',f:{recession:2}},
  {key:'inflation',label:'Inflación / estanflación',f:{inflation:2}},
  {key:'dollar_up',label:'El dólar se dispara',f:{dollar:2}},
  {key:'dollar_down',label:'El dólar se debilita',f:{dollar:-2}},
  {key:'china_war',label:'Guerra comercial EEUU-China',f:{china:2,tariffs:1}},
  {key:'taiwan',label:'Escalada militar por Taiwán',f:{taiwan:2}},
  {key:'credit',label:'Crisis de crédito / banca',f:{credit:2}},
  {key:'cyberattack',label:'Ciberataque global',f:{cyber:2}},
  {key:'pandemic',label:'Nueva pandemia',f:{pandemic:2}},
  {key:'climate',label:'Evento climático extremo',f:{climate:2}},
  {key:'tariffs',label:'Nuevos aranceles',f:{tariffs:2}},
  {key:'crypto',label:'Corrección en cripto',f:{crypto:2}},
  {key:'luxury',label:'Boom de lujo en China',f:{luxury:2}},
  {key:'ev',label:'Adopción acelerada del EV',f:{ev:2}},
  {key:'reshoring',label:'Reshoring industrial',f:{reshoring:2}},
  {key:'energytrans',label:'Transición energética acelerada',f:{energytransition:2}},
  {key:'labor',label:'Escasez de mano de obra',f:{labor:2}},
  {key:'aireg',label:'Regulación estricta de IA',f:{aireg:2}},
  {key:'nuclear',label:'Renacimiento nuclear',f:{nuclear:2}},
  {key:'quantum',label:'Avance en computación cuántica',f:{quantumbreak:2}},
  {key:'rearme',label:'Rearme global acelerado',f:{war:2}}
];

export const RESP = {pos:{label:'Beneficiado',sign:'+',color:'#4ADE80'},neg:{label:'Perjudicado',sign:'−',color:'#F87171'},neutral:{label:'Neutro',sign:'·',color:'#8A94A0'}};

export const RANGE_LABELS = {dia:'Día', semana:'Semana', mes:'Mes', anio:'Año'};

// Calendario oficial de reuniones del FOMC — fechas publicadas por la Fed con
// antelación (federalreserve.gov/monetarypolicy/fomccalendars.htm). Fijo a mano
// porque casi nunca cambia; revisar esa página si hace falta ampliar años.
// "sep" = la reunión incluye el Summary of Economic Projections (dot plot),
// las que más mueven mercado — siempre marzo/junio/septiembre/diciembre.
export const FOMC_MEETINGS = [
  { start:'2026-01-27', end:'2026-01-28', sep:false },
  { start:'2026-03-17', end:'2026-03-18', sep:true },
  { start:'2026-04-28', end:'2026-04-29', sep:false },
  { start:'2026-06-16', end:'2026-06-17', sep:true },
  { start:'2026-07-28', end:'2026-07-29', sep:false },
  { start:'2026-09-15', end:'2026-09-16', sep:true },
  { start:'2026-10-27', end:'2026-10-28', sep:false },
  { start:'2026-12-08', end:'2026-12-09', sep:true },
  { start:'2027-01-26', end:'2027-01-27', sep:false },
  { start:'2027-03-16', end:'2027-03-17', sep:true },
  { start:'2027-04-27', end:'2027-04-28', sep:false },
  { start:'2027-06-08', end:'2027-06-09', sep:true },
  { start:'2027-07-27', end:'2027-07-28', sep:false },
  { start:'2027-09-14', end:'2027-09-15', sep:true },
  { start:'2027-10-26', end:'2027-10-27', sep:false },
  { start:'2027-12-07', end:'2027-12-08', sep:true },
];

export const MA_WEEK_OPTIONS = [{key:'w10', weeks:10, label:'MA 10 sem', color:'#5B8DEF'}, {key:'w50', weeks:50, label:'MA 50 sem', color:'#FBBF24'}, {key:'w200', weeks:200, label:'MA 200 sem', color:'#B79CED'}];

// El buscador de noticias de Yahoo no indexa nada bajo el ticker exacto de estos
// activos (comprobado: "BTC-USD"/"IGLN.L"/"WSLV.L" devuelven 0 resultados) — hay
// que buscar por un término que sí tenga cobertura real de noticias.
export const NEWS_QUERY_ALIAS = {
  'BTC-USD': 'Bitcoin',
  'IGLN.L': 'GLD',
  'WSLV.L': 'SLV',
};

export const COUNTRIES = ['España','Andorra','Portugal','Francia','Alemania','Italia','Reino Unido','Irlanda','Países Bajos','Bélgica','Suiza','Austria','Suecia','Noruega','Dinamarca','Finlandia','Polonia','República Checa','Grecia','Estados Unidos','Canadá','México','Argentina','Chile','Colombia','Perú','Uruguay','Paraguay','Bolivia','Venezuela','Ecuador','Costa Rica','Panamá','República Dominicana','Cuba','Brasil','Japón','China','Corea del Sur','Taiwán','India','Australia','Nueva Zelanda','Marruecos','Sudáfrica','Israel','Emiratos Árabes Unidos'];

export const SUFFIX_CURRENCY = { '.DE':'EUR', '.PA':'EUR', '.MI':'EUR', '.AS':'EUR', '.SW':'CHF', '.CO':'DKK', '.MC':'EUR', '.ST':'SEK' };

export const SUFFIX_MARKET = { '.DE':'europa', '.PA':'europa', '.MI':'europa', '.AS':'europa', '.L':'europa', '.MC':'europa', '.ST':'europa', '.TO':'canada', '.V':'canada', '.TW':'taiwan', '.TWO':'taiwan' };

export const SUFFIX_EXCHANGE = {
  '.DE':'Xetra (Alemania)', '.PA':'Euronext París', '.MI':'Borsa Italiana (Milán)',
  '.AS':'Euronext Ámsterdam', '.SW':'SIX Swiss Exchange', '.CO':'Nasdaq Copenhague', '.MC':'BME (Madrid)',
  '.ST':'Nasdaq Estocolmo', '.L':'London Stock Exchange', '.BR':'Euronext Bruselas', '.HE':'Nasdaq Helsinki',
  '.OL':'Bolsa de Oslo', '.IR':'Euronext Dublín', '.LS':'Euronext Lisboa', '.LU':'Bolsa de Luxemburgo',
  '.WA':'Bolsa de Varsovia', '.AT':'Bolsa de Atenas', '.VI':'Bolsa de Viena', '.TA':'Bolsa de Tel Aviv',
  '.HK':'Bolsa de Hong Kong', '.TO':'Toronto Stock Exchange', '.V':'TSX Venture', '.TW':'Bolsa de Taiwán', '.TWO':'Bolsa de Taiwán (OTC)',
};

export const CRYPTO_TICKER_RE = /-(USD|EUR|USDT|USDC|GBP)$/i;

// Alpha Vantage devuelve sectores/industrias genéricos (GICS); esto es una
// aproximación por palabras clave a los 22 sectores propios del modelo de
// sensibilidad a escenarios (SENS) — es una sugerencia editable, no exacta.
export const INDUSTRY_KEYWORD_SECTOR = [
  [/semiconductor/, 'Semiconductores'],
  [/software/, 'Software empresarial'],
  [/security|cyber/, 'Ciberseguridad'],
  [/quantum/, 'Computación cuántica'],
  [/aerospace|defense/, 'Defensa'],
  [/bank/, 'Banca'],
  [/uranium/, 'Minería / uranio'],
  [/mining|metals|steel/, 'Minería / uranio'],
  [/chemical/, 'Química / materiales'],
  [/oil|gas|energy/, 'Energía'],
  [/auto/, 'Automóviles'],
  [/marine|shipping/, 'Marítimo'],
  [/railroad|trucking|logistics|airlines|air freight/, 'Transporte / logística'],
  [/reit.*data center|data center.*reit/, 'Real estate de centros de datos (REIT)'],
  [/telecom|communication equipment|networking/, 'Redes / conectividad'],
  [/health|drug|biotech|pharma|medical/, 'Salud'],
  [/credit services|financial data|fintech/, 'Pagos / fintech'],
  [/water|utilities.*water/, 'Infraestructura / agua'],
  [/consumer electronics|internet retail|specialty retail|restaurants|apparel|luxury|hotel|travel/, 'Consumo discrecional'],
  [/household|packaged foods|beverages|grocery|discount stores/, 'Consumo defensivo'],
];

export const SECTOR_KEYWORD_SECTOR = [
  [/technology/, 'Tech / IA'],
  [/financial/, 'Banca'],
  [/health/, 'Salud'],
  [/energy/, 'Energía'],
  [/industrial/, 'Industria / automatización'],
  [/consumer cyclical|consumer discretionary/, 'Consumo discrecional'],
  [/consumer defensive|consumer staples/, 'Consumo defensivo'],
  [/basic materials|materials/, 'Química / materiales'],
  [/utilities/, 'Infraestructura / agua'],
  [/real estate/, 'Real estate de centros de datos (REIT)'],
  [/communication/, 'Redes / conectividad'],
];

export const SECTOR_LIST = Object.keys(SENS);

export const FRAMEWORK_RULES = [
  'Controlar las emociones y no operar con sentimientos, creencias o influencias.',
  'Protege tu capital: cada inversión, una estrategia.',
  'Diferencia siempre precio de valor.',
  'El fundamental decide si inviertes, el técnico decide cuándo.',
  'En algún momento, el 80% de las empresas caerán más de un 50%; el 50% caerán más de un 80%.',
  'Nunca se opera cerca de eventos o resultados, por muy positivos que puedan ser.',
  'No hacer nada, ya es hacer algo.',
];

export const FRAMEWORK_STRATEGY = [
  { title:'Análisis de compañía', items:['Mercado en el que opera', 'Modelo de negocio', 'Qué problema resuelve la empresa', 'Competencia', 'Ventajas competitivas', 'Puntos fuertes', 'Puntos flojos', 'Directiva', 'Recompras y ventas de acciones por parte de la directiva', 'Regulación y terceros'] },
  { title:'Análisis de situación financiera', items:['Caja y equivalentes', 'Deuda neta y deuda neta / EBITDA', 'Calendario de vencimientos de deuda', 'Free cash flow', 'Márgenes: bruto, operativo y neto', 'Evolución de ingresos y beneficio (crecimiento)', 'Rentabilidad: ROIC y ROE'] },
  { title:'Historial de sucesos relevantes', items:['Revisar los últimos 10 años de la compañía'] },
  { title:'Valor razonable', items:['Múltiplos comparables (PER, EV/EBITDA, P/FCF) vs sector y media histórica propia', 'Descuento de flujos de caja (DCF)', 'Suma de partes, si aplica', 'Transacciones precedentes comparables', 'Triangular los métodos anteriores en un rango de valor, no un número único'] },
  { title:'Margen de seguridad', items:['Diferencia entre precio actual y el rango de valor razonable', 'Definir el % mínimo de margen exigido antes de entrar'] },
  { title:'Situación técnica', items:['Media de 200 días vs media de 40 días', 'Volumen', 'Figuras chartistas'] },
  { title:'Salida de la posición', items:['Cuándo', 'En qué condiciones', 'Con qué motivos', 'En qué plazo de tiempo', 'A qué importe'] },
  { title:'Revisión de la tesis', items:['Cuándo hay que revisarla', 'Qué eventos disparan las acciones de revisión'] },
];

// Estrategia estructural (no táctica) para la cartera "Reserva de Valor" —
// distinta del framework de stock-picking de arriba: aquí no hay tesis por
// empresa, son reglas de aportación fijas + condicionales por caída de precio.
export const RESERVA_VALOR_COMPOSITION = [
  { asset:'BTC', target:50, range:'40% – 60%' },
  { asset:'Oro', target:35, range:'25% – 45%' },
  { asset:'Plata', target:15, range:'5% – 25%' },
];

export const RESERVA_VALOR_BASE = [
  { asset:'BTC', pct:50, amount:200 },
  { asset:'Oro', pct:31.3, amount:125 },
  { asset:'Plata', pct:18.8, amount:75 },
];

export const RESERVA_VALOR_TRIGGERS = [
  { asset:'BTC', t1:'-20%', e1:'+100€', t2:'-35%', e2:'+200€' },
  { asset:'Oro', t1:'-8%', e1:'+70€', t2:'-15%', e2:'+140€' },
  { asset:'Plata', t1:'-12%', e1:'+30€', t2:'-22%', e2:'+60€' },
];

export const MONTHLY_PLAN = [
  { label:'Reserva de Valor · BTC', amount:200 },
  { label:'Reserva de Valor · Oro', amount:125 },
  { label:'Reserva de Valor · Plata', amount:75 },
  { label:'Acciones (cartera principal)', amount:600 },
];

// De dónde sale cada dato de la app y con qué frecuencia se actualiza — para que
// nunca se confunda "en vivo" con "publicado hace X" al leer un número.
export const DATA_SOURCES = [
  {
    provider: 'Yahoo Finance', auth: 'Sin API key',
    items: [
      { label: 'Precio y cotización de cada posición', freq: 'Cron cada hora, L-V en horario de mercado (13-21h UTC)' },
      { label: 'Gráfico histórico de precio (visualizador y modal de posición)', freq: 'En vivo, al abrir el gráfico' },
      { label: 'Buscador de tickers', freq: 'En vivo, al escribir' },
      { label: 'Noticias de la cartera', freq: 'En vivo, al pulsar "Noticias de mi cartera"' },
      { label: 'Calendario de eventos de la acción (resultados, dividendos...)', freq: 'En vivo, al consultar' },
      { label: 'Descripción de la empresa (si no hay una propia guardada)', freq: 'En vivo, la primera vez que abres esa posición' },
      { label: 'Métricas técnicas de los screeners (RSI, medias, volumen)', freq: 'Cron cada hora, L-V en horario de mercado' },
      { label: 'Fundamentales de los screeners (PER, capitalización, crecimiento...)', freq: 'Cron cada hora, L-V en horario de mercado — requiere cookie+crumb de Yahoo, en lotes de 100 tickers' },
      { label: 'Máximo de 90 días y % de caída (BTC, oro, plata)', freq: 'Cron cada hora, L-V en horario de mercado' },
      { label: 'Liquidez de mercado (ratio HYG/IEF vs media 50 días)', freq: 'En vivo, al abrir la card. HYG son bonos corporativos high-yield (baja calidad crediticia) e IEF deuda del Tesoro EEUU a medio plazo — cuando el ratio entre ambos cae por debajo de su propia media, significa que los inversores están exigiendo más prima por prestar a empresas de baja calidad frente a deuda pública ("estrés de crédito"), señal de que ven más riesgo de impago o de que hay menos dinero disponible dispuesto a asumirlo. El crédito suele moverse antes que la bolsa, así que episodios de estrés de crédito han anticipado caídas bursátiles en varias ocasiones (2018, 2020, 2022) — es contexto de fondo para ir con más cuidado, no una señal de venta por sí sola.' },
      { label: 'Short interest oficial (visualizador y modal de posición)', freq: 'Se publica solo 2 veces al mes (cortes a mitad y a fin de mes), con ~8 días hábiles de retraso hasta hacerse público. Es el % del float (las acciones que de verdad se pueden negociar; no cuentan las bloqueadas de fundadores, directivos o inversores con acuerdos de bloqueo) que están prestadas y sin devolver ahora mismo — el acumulado real de apuestas en contra abiertas. Distinto del volumen en corto diario de FINRA (más abajo), que es cuánto del volumen negociado HOY fue una venta en corto — y que incluye tanto apuestas reales en contra como ventas en corto rutinarias de los creadores de mercado (liquidez, cobertura de opciones), por lo que un % alto ahí no siempre significa sentimiento bajista generalizado. Solo disponible para acciones, requiere cookie+crumb de Yahoo.' },
    ],
  },
  {
    provider: 'Alpha Vantage', auth: 'Con API key propia',
    items: [
      { label: 'Fundamentales completos del visualizador de acciones (PER, PEG, márgenes, ROE, dividendos, estimaciones de analistas...)', freq: 'En vivo al consultar, pero el propio proveedor solo actualiza sus datos ~1 vez al día — no es intradía. Límite de peticiones diarias en el plan gratuito.' },
    ],
  },
  {
    provider: 'FINRA (Reg SHO)', auth: 'Sin autenticación — fichero público diario',
    items: [
      { label: 'Volumen en corto diario (visualizador y modal de posición)', freq: 'Se publica 1 vez al día, hacia las 18:00 hora de Nueva York, con el dato de esa misma sesión. Solo cubre acciones cotizadas en EEUU. No es el short interest oficial (ese lo publican las bolsas quincenalmente) — es el % del volumen negociado ese día que fue venta en corto, un proxy mucho más frecuente.' },
    ],
  },
  {
    provider: 'Nasdaq', auth: 'Sin autenticación — API pública de nasdaq.com',
    items: [
      { label: 'Histórico de short interest, últimas 6 quincenas (visualizador y modal de posición)', freq: 'Mismo calendario de publicación que el short interest oficial de arriba (2 veces al mes, ~8 días hábiles de retraso). Se muestra en millones de acciones, no en % del float — para no mezclar con una aproximación calculada con el float de hoy, que puede haber cambiado entre una quincena y otra.' },
    ],
  },
  {
    provider: 'FRED (Reserva Federal de San Luis)', auth: 'Sin autenticación — CSV público',
    items: [
      { label: 'Fed Funds Rate (rango objetivo) y calendario FOMC', freq: 'El tipo solo cambia en las reuniones del FOMC (máx. 8 veces al año) — el calendario de fechas está fijo a mano en la app, no viene de FRED. Las reuniones marcadas "SEP" incluyen el Summary of Economic Projections (el "dot plot" con las proyecciones de tipos de cada miembro del FOMC) y suelen mover más el mercado que una reunión normal.' },
      { label: 'Liquidez neta de la Fed (Total Assets, TGA, RRP)', freq: 'Total Assets y TGA se publican 1 vez a la semana (H.4.1, los jueves); RRP es diario. La card usa siempre la semana más reciente de Total Assets como fecha de referencia. Lectura del signo en Total Assets: variación positiva (+, verde) = el balance sube = QE, inyecta liquidez; variación negativa (−, rojo) = el balance baja = QT, drena liquidez. Qué significa esto para el mercado: inyectar liquidez (QE) tiende a empujar al alza los activos de riesgo (acciones, cripto) aunque no haya un motivo fundamental — es dinero nuevo buscando dónde colocarse. Drenar liquidez (QT) tiende a presionarlos a la baja, incluso con buenos resultados empresariales — hay menos dinero disponible circulando. Es contexto de fondo, no una señal de compra/venta por sí sola.' },
    ],
  },
  {
    provider: 'CNN Business', auth: 'Sin autenticación — endpoint no oficial de su propia web',
    items: [
      { label: 'Fear & Greed Index (dentro de "Índice de riesgo de mercado")', freq: 'Se actualiza en vivo durante la sesión de mercado en EEUU. Es la media de 7 señales (momentum, amplitud del mercado, put/call ratio, demanda de bonos basura, demanda de refugio seguro, volatilidad y fuerza del precio), no la misma metodología que el aro de la card (que solo mira S&P 500 vs media 40 sem + VIX) — se muestran juntos porque miden lo mismo en espíritu (sentimiento/riesgo del mercado), no porque sean el mismo cálculo.' },
    ],
  },
  {
    provider: 'AAII (American Association of Individual Investors)', auth: 'Sin autenticación — leído del HTML público de su página de resultados',
    items: [
      { label: 'Sentimiento inversor particular — Alcistas/Neutrales/Bajistas (píldora en la cabecera, junto al indicador de mercados abiertos)', freq: 'Encuesta semanal, publicada cada jueves con el dato de la semana que acaba de cerrar (jueves a miércoles). No hay API/CSV público sin membresía de pago — se lee directamente de la página pública de resultados, así que un cambio de diseño en su web podría romper la lectura temporalmente. Se usa como indicador "contrarian" (contrario): cuando casi todo el mundo piensa igual, el mercado ha tendido históricamente a hacer lo contrario. Si casi todos son bajistas (mucho miedo), ya casi no queda gente por vender — y eso ha precedido rebotes. Si casi todos son alcistas (optimismo generalizado), ya casi no queda gente por comprar — y eso ha precedido caídas. No es una señal infalible ni de corto plazo, es contexto de fondo: cuando todos van en la misma dirección, conviene estar más alerta.' },
    ],
  },
];

// Un tramo horario por sesión. No tiene en cuenta festivos de cada bolsa.
export const MARKET_SESSION_BY_KEY = {
  eeuu_canada: { tz:'America/New_York', sessions:[[9*60+30,16*60]], label:'EEUU / Canadá', flag:'🇺🇸', hours:'NYSE/Nasdaq/TSX: 9:30-16:00, hora de Nueva York, días laborables.' },
  europa: { tz:'Europe/Madrid', sessions:[[9*60,17*60+30]], label:'Europa', flag:'🇪🇺', hours:'Principales bolsas europeas (Xetra, Euronext, BME, LSE...): 9:00-17:30, hora centroeuropea, días laborables.' },
};
