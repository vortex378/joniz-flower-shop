/* ===================== LUJON FLOWERS — shared app.js ===================== */
const WA = '355694081892';
const IMG = id => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;
const IMG_SM = id => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=500`;

/* ---- image fallback pool (if a Pexels photo ever fails) ---- */
const IMGFB = [
  'https://assets.mixkit.co/videos/1168/1168-thumb-720-0.jpg',
  'https://assets.mixkit.co/videos/1187/1187-thumb-720-0.jpg',
  'https://assets.mixkit.co/videos/2854/2854-thumb-720-0.jpg',
  'https://assets.mixkit.co/videos/1780/1780-thumb-720-0.jpg',
  'https://assets.mixkit.co/videos/4742/4742-thumb-720-0.jpg',
  'https://assets.mixkit.co/videos/4881/4881-thumb-720-0.jpg'
];
function guardImages(root){
  (root||document).querySelectorAll('img').forEach((img,i)=>{
    if(img._g) return; img._g=1;
    img.addEventListener('error',()=>{ if(img.dataset.fb) return; img.dataset.fb=1; img.src=IMGFB[i%IMGFB.length]; });
  });
}

/* ===================== PRODUCT DATA ===================== */
const CATS = {
  all:   {sq:'Të gjitha', en:'All'},
  roses: {sq:'Trëndafila', en:'Roses'},
  tulips:{sq:'Tulipanë', en:'Tulips'},
  mixed: {sq:'Të përziera', en:'Mixed'},
  boxes: {sq:'Kuti & Shporta', en:'Boxes & Baskets'},
  plants:{sq:'Bimë & Vazo', en:'Plants & Vases'}
};
const PRODUCTS = [
  {id:'rose-standard', cat:'roses', price:3500, tag:'pop', imgs:[3117159,10587479,12272327],
    name:{sq:'Buqetë Standard me Trëndafila', en:'Standard Rose Bouquet'},
    desc:{sq:'Trëndafila klasikë të freskët, të lidhur me dorë në një buqetë elegante — dhurata e përsosur për çdo rast.', en:'Classic fresh roses, hand-tied into an elegant bouquet — the perfect gift for any occasion.'}},
  {id:'rose-deluxe', cat:'roses', price:6500, imgs:[10587479,12272327,3117159],
    name:{sq:'Buqetë Deluxe me Trëndafila', en:'Deluxe Rose Bouquet'},
    desc:{sq:'Një buqetë më e pasur me trëndafila premium dhe gjelbërim, e paketuar me shije.', en:'A fuller bouquet of premium roses and foliage, wrapped with taste.'}},
  {id:'rose-premium', cat:'roses', price:10500, tag:'lux', imgs:[12272327,10587479,13306125],
    name:{sq:'Buqetë Premium me Trëndafila', en:'Premium Rose Bouquet'},
    desc:{sq:'Kompozimi ynë më luksoz me trëndafila — i madhërishëm, i pasur dhe i paharrueshëm.', en:'Our most luxurious rose arrangement — grand, rich and unforgettable.'}},
  {id:'tulip-standard', cat:'tulips', price:3500, imgs:[11528248,20004051,20155225],
    name:{sq:'Buqetë Standard me Tulipanë', en:'Standard Tulip Bouquet'},
    desc:{sq:'Tulipanë të gjallë e të freskët, simbol i pranverës dhe fillimeve të reja.', en:'Vibrant, fresh tulips — a symbol of spring and new beginnings.'}},
  {id:'tulip-premium', cat:'tulips', price:18000, tag:'lux', imgs:[20004051,11528248,20155225],
    name:{sq:'Buqetë Premium me Tulipanë', en:'Premium Tulip Bouquet'},
    desc:{sq:'Një det tulipanësh premium në ngjyra të zgjedhura — deklarata jonë më e bukur.', en:'A sea of premium tulips in curated colours — our most striking statement.'}},
  {id:'peony', cat:'mixed', price:5000, imgs:[14424033,13306125,16244693],
    name:{sq:'Buqetë me Peonia', en:'Peony Bouquet'},
    desc:{sq:'Peonia të buta e romantike, të preferuarat e sezonit për momentet e dashurisë.', en:'Soft, romantic peonies — the seasonal favourite for moments of love.'}},
  {id:'surprise', cat:'mixed', price:5000, tag:'pop', imgs:[13306125,16244693,14424033],
    name:{sq:'Buqetë Surprise', en:'Surprise Bouquet'},
    desc:{sq:'Na lini ne t\'ju befasojmë — floristi ynë krijon një buqetë unike me lulet më të mira të ditës.', en:'Let us surprise you — our florist crafts a unique bouquet from the best blooms of the day.'}},
  {id:'mix', cat:'mixed', price:3000, imgs:[16244693,13306125,11196806],
    name:{sq:'Buqetë me Lule Mix', en:'Mixed Bouquet'},
    desc:{sq:'Një përzierje gëzimplotë ngjyrash dhe llojesh, e freskët dhe plot jetë.', en:'A joyful mix of colours and varieties, fresh and full of life.'}},
  {id:'box-roses', cat:'boxes', price:12000, tag:'lux', imgs:[13065398,13065399,13065400],
    name:{sq:'Kompozim me Trëndafila në Kuti', en:'Rose Box Arrangement'},
    desc:{sq:'Trëndafila të renditur me përpikëri në një kuti elegante — luks që qëndron gjatë.', en:'Roses arranged with precision in an elegant box — luxury that lasts.'}},
  {id:'basket', cat:'boxes', price:6000, imgs:[16117968,15979836,18408482],
    name:{sq:'Shportë me Lule', en:'Flower Basket'},
    desc:{sq:'Një shportë bujare me lule sezonale — ideale për urime dhe festa.', en:'A generous basket of seasonal flowers — ideal for celebrations and greetings.'}},
  {id:'vase', cat:'plants', price:7500, imgs:[15979836,18408482,16117968],
    name:{sq:'Kompozim në Vazo Qelqi', en:'Glass Vase Arrangement'},
    desc:{sq:'Lule të rregulluara në një vazo qelqi elegante — gati për t\'u vendosur menjëherë.', en:'Flowers arranged in an elegant glass vase — ready to display right away.'}},
  {id:'plant', cat:'plants', price:4000, imgs:[18408482,15979836,16117968],
    name:{sq:'Bimë me Vazo', en:'Potted Plant'},
    desc:{sq:'Një bimë e gjelbër e gjallë në vazo — një dhuratë që zgjat me muaj.', en:'A living green plant in a pot — a gift that lasts for months.'}}
];
const findProduct = id => PRODUCTS.find(p=>p.id===id);
const priceFmt = n => n.toLocaleString('en-US') + ' ALL';
const waLink = (txt) => `https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;

/* ===================== SHARED UI STRINGS ===================== */
const UI = {
 sq:{
  nav_home:'Kreu', nav_shop:'Dyqani', nav_prices:'Çmimet', nav_weddings:'Dasma & Evente', nav_about:'Historia', nav_contact:'Kontakt',
  cta_order:'Porosit', cta_text:'✉ Na shkruani', cta_call:'✆ Telefononi', view:'Shiko →',
  from:'nga', order_wa:'✉ Porosit në WhatsApp', back_shop:'← Kthehu te dyqani', related:'Mund t\'ju pëlqejnë',
  foot_tag:'Luleshitore artizanale në zemër të Tiranës. Ne ngjyrosim momentet tuaja — çdo ditë, me dorë.',
  foot_explore:'Eksploro', foot_contact:'Kontakt', foot_hours:'E Hënë – E Diel · 07:30 – 21:30',
  skip:'Kalo ›', intro_tag:'We color your moments', m_call:'Telefono', m_wa:'WhatsApp'
 },
 en:{
  nav_home:'Home', nav_shop:'Shop', nav_prices:'Prices', nav_weddings:'Weddings & Events', nav_about:'Our Story', nav_contact:'Contact',
  cta_order:'Order', cta_text:'✉ Text Us', cta_call:'✆ Call Us', view:'View →',
  from:'from', order_wa:'✉ Order on WhatsApp', back_shop:'← Back to shop', related:'You may also like',
  foot_tag:'Artisan florist in the heart of Tirana. We color your moments — every day, by hand.',
  foot_explore:'Explore', foot_contact:'Contact', foot_hours:'Monday – Sunday · 07:30 – 21:30',
  skip:'Skip ›', intro_tag:'We color your moments', m_call:'Call', m_wa:'WhatsApp'
 }
};
function getLang(){ return localStorage.getItem('lujonLang') || 'sq'; }
function t(key){ return (UI[getLang()]||UI.sq)[key] ?? key; }

/* ===================== LANGUAGE ===================== */
function applyLang(lang){
  localStorage.setItem('lujonLang', lang);
  document.documentElement.lang = lang;
  // page-scoped strings
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.dataset.i18n, dict=PAGE_I18N[lang]||{};
    if(dict[k]!==undefined) el.textContent=dict[k];
    else if(UI[lang][k]!==undefined) el.textContent=UI[lang][k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{
    const k=el.dataset.i18nHtml, dict=PAGE_I18N[lang]||{};
    if(dict[k]!==undefined) el.innerHTML=dict[k];
  });
  // lang buttons
  document.querySelectorAll('.lang-switch button').forEach(b=>b.classList.toggle('active', b.dataset.lang===lang));
  // re-render dynamic areas
  if(document.getElementById('shopGrid')) renderShop(currentFilter);
  if(document.getElementById('featGrid')) renderFeatured();
  if(document.getElementById('pdRoot')) renderProduct();
  // update document title if provided
  if(window.PAGE_TITLE && PAGE_TITLE[lang]) document.title = PAGE_TITLE[lang];
  // re-run hero text effects (innerHTML was just reset by the i18n loop)
  if(document.querySelector('.hero h1[data-i18n-html]')) splitHeroTitle();
  if(document.getElementById('rotWord')) startRotator();
}
window.setLang = applyLang;
// Allow pages to define PAGE_I18N / PAGE_TITLE before app runs
window.PAGE_I18N = window.PAGE_I18N || {sq:{},en:{}};

/* ===================== NAV (built per-page via data-page) ===================== */
function buildChrome(){
  const active = document.body.dataset.page || '';
  const navHTML = `
   <a href="index.html" class="logo">Lujon</a>
   <div class="links" id="navLinks">
     <a href="index.html" data-i18n="nav_home" ${active==='home'?'class="active"':''}>Kreu</a>
     <a href="shop.html" data-i18n="nav_shop" ${active==='shop'?'class="active"':''}>Dyqani</a>
     <a href="prices.html" data-i18n="nav_prices" ${active==='prices'?'class="active"':''}>Çmimet</a>
     <a href="weddings.html" data-i18n="nav_weddings" ${active==='weddings'?'class="active"':''}>Dasma & Evente</a>
     <a href="about.html" data-i18n="nav_about" ${active==='about'?'class="active"':''}>Historia</a>
     <a href="contact.html" data-i18n="nav_contact" ${active==='contact'?'class="active"':''}>Kontakt</a>
     <div class="lang-switch">
       <button data-lang="sq" onclick="setLang('sq')">SQ</button>
       <button data-lang="en" onclick="setLang('en')">EN</button>
     </div>
   </div>
   <div class="lang-switch lang-mobile" aria-label="Language">
     <button data-lang="sq" onclick="setLang('sq')">SQ</button>
     <button data-lang="en" onclick="setLang('en')">EN</button>
   </div>
   <button class="burger" id="burger" aria-label="menu"><span></span><span></span><span></span></button>`;
  const nav=document.getElementById('nav'); if(nav) nav.innerHTML=navHTML;

  const footHTML = `
   <div class="foot-grid">
     <div>
       <div class="flogo">Lujon</div>
       <p data-i18n="foot_tag">Luleshitore artizanale në zemër të Tiranës.</p>
     </div>
     <div class="foot-col">
       <h5 data-i18n="foot_explore">Eksploro</h5>
       <a href="index.html" data-i18n="nav_home">Kreu</a>
       <a href="shop.html" data-i18n="nav_shop">Dyqani</a>
       <a href="prices.html" data-i18n="nav_prices">Çmimet</a>
       <a href="weddings.html" data-i18n="nav_weddings">Dasma & Evente</a>
       <a href="about.html" data-i18n="nav_about">Historia</a>
       <a href="contact.html" data-i18n="nav_contact">Kontakt</a>
     </div>
     <div class="foot-col">
       <h5 data-i18n="foot_contact">Kontakt</h5>
       <a href="tel:+${WA}">+355 69 408 1892</a>
       <a href="${waLink('Pershendetje! Dua te porosis nje buqete.')}" target="_blank" rel="noopener">WhatsApp</a>
       <a href="https://www.instagram.com/lujonflowers/" target="_blank" rel="noopener">Instagram</a>
       <a href="https://maps.google.com/?q=41.32931071,19.81473408" target="_blank" rel="noopener">Rruga e Durrësit, Tiranë</a>
       <a data-i18n="foot_hours">E Hënë – E Diel · 07:30 – 21:30</a>
     </div>
   </div>
   <div class="foot-bottom">
     <div>© 2026 Lujon Flowers</div>
     <div>We color your moments</div>
   </div>`;
  const foot=document.getElementById('footer'); if(foot) foot.innerHTML=footHTML;

  // floating whatsapp
  if(!document.querySelector('.float-wa')){
    const a=document.createElement('a');
    a.className='float-wa'; a.href=`https://wa.me/${WA}`; a.target='_blank'; a.rel='noopener'; a.setAttribute('aria-label','WhatsApp');
    a.innerHTML='<svg viewBox="0 0 32 32"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.6.8 5 2.2 7L4 29l7.2-2.1c1.9 1 4 1.6 6.3 1.6h.5c6.6 0 12-5.4 12-12S22.6 3 16 3zm5.9 17c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.1-.9-3.4-1.4-5.6-4.9-5.8-5.1-.2-.2-1.4-1.9-1.4-3.6s.9-2.5 1.2-2.9c.3-.3.7-.4.9-.4h.6c.2 0 .5-.1.7.6l1 2.4c.1.2.1.4 0 .6l-.4.6-.5.6c-.2.2-.4.4-.2.7.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3.1 1.9.4.2.6.1.8-.1l1.2-1.4c.3-.3.5-.3.8-.2l2.5 1.2c.4.2.6.3.7.5.1.1.1.8-.2 1.6z"/></svg>';
    document.body.appendChild(a);
  }
  // sticky mobile call/whatsapp bar
  if(!document.querySelector('.mobile-bar')){
    const bar=document.createElement('div'); bar.className='mobile-bar';
    bar.innerHTML=`<a class="m-call" href="tel:+${WA}">☏ <span data-i18n="m_call">Telefono</span></a>`+
      `<a class="m-wa" target="_blank" rel="noopener" href="${waLink('Pershendetje! Dua te porosis nje buqete.')}">✉ <span data-i18n="m_wa">WhatsApp</span></a>`;
    document.body.appendChild(bar);
  }
}

function initNav(){
  const nav=document.getElementById('nav');
  const solid = document.body.dataset.navSolid==='1';
  if(solid) nav.classList.add('solid');
  else window.addEventListener('scroll',()=>{
    // don't change nav style while the mobile menu is open
    if(document.body.classList.contains('menu-open')) return;
    nav.classList.toggle('scrolled',window.scrollY>60);
  },{passive:true});
  const burger=document.getElementById('burger'), links=document.getElementById('navLinks');
  function setMenu(open){
    links.classList.toggle('open',open);
    burger.classList.toggle('active',open);
    document.body.classList.toggle('menu-open',open);
    burger.setAttribute('aria-expanded',open?'true':'false');
  }
  burger.addEventListener('click',e=>{ e.stopPropagation(); setMenu(!links.classList.contains('open')); });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  window.addEventListener('resize',()=>{ if(window.innerWidth>900) setMenu(false); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') setMenu(false); });
}

/* ===================== TEXT FX ===================== */
const REDUCE = ()=>window.matchMedia('(prefers-reduced-motion:reduce)').matches;

function splitHeroTitle(){
  const h=document.querySelector('.hero h1'); if(!h || REDUCE()) return;
  const nodes=[...h.childNodes]; const frag=document.createDocumentFragment(); let i=0;
  nodes.forEach(n=>{
    if(n.nodeType===3){
      n.textContent.split(/(\s+)/).forEach(tok=>{
        if(tok==='') return;
        if(/^\s+$/.test(tok)){ frag.appendChild(document.createTextNode(tok)); }
        else{ const s=document.createElement('span'); s.className='word'; s.textContent=tok; s.style.animationDelay=(i*0.08)+'s'; i++; frag.appendChild(s); }
      });
    } else if(n.nodeType===1){
      n.classList.add('word'); n.style.animationDelay=(i*0.08)+'s'; i++; frag.appendChild(n);
    }
  });
  h.innerHTML=''; h.appendChild(frag);
}

let rotTimer;
const ROT={
  sq:['dashurinë','dasmën','ditëlindjen','falënderime','ngushëllime','çdo moment'],
  en:['love','weddings','birthdays','thank-yous','sympathy','every moment']
};
function startRotator(){
  const el=document.getElementById('rotWord'); if(!el) return;
  const words=ROT[getLang()]||ROT.sq; let i=0;
  clearInterval(rotTimer); el.textContent=words[0];
  if(REDUCE()) return;
  rotTimer=setInterval(()=>{
    el.classList.add('swap');
    setTimeout(()=>{ i=(i+1)%words.length; el.textContent=words[i]; el.classList.remove('swap'); },400);
  },2400);
}

function initCounters(){
  const els=document.querySelectorAll('[data-count]'); if(!els.length) return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(!e.isIntersecting) return; io.unobserve(e.target);
    const el=e.target, end=+el.dataset.count, suf=el.dataset.suffix||'';
    if(REDUCE()){ el.textContent=end+suf; return; }
    let t0=null; const dur=1500;
    const step=ts=>{ if(!t0)t0=ts; const p=Math.min((ts-t0)/dur,1); el.textContent=Math.round(p*end)+suf; if(p<1)requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }),{threshold:.4});
  els.forEach(el=>io.observe(el));
}

function initHeadings(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }),{threshold:.35});
  document.querySelectorAll('.section-head').forEach(el=>io.observe(el));
}

function initScrollProgress(){
  if(document.querySelector('.scroll-prog')) return;
  const bar=document.createElement('div'); bar.className='scroll-prog'; document.body.appendChild(bar);
  const upd=()=>{ const h=document.documentElement.scrollHeight-window.innerHeight; bar.style.width=(h>0?Math.min(100,window.scrollY/h*100):0)+'%'; };
  window.addEventListener('scroll',upd,{passive:true}); window.addEventListener('resize',upd,{passive:true}); upd();
}

function keepHeroPlaying(){
  const hv=document.getElementById('heroVid');
  if(!hv) return;
  hv.muted=true;
  const go=()=>{ const p=hv.play(); if(p&&p.catch) p.catch(()=>{}); };
  go();
  document.addEventListener('visibilitychange',()=>{ if(!document.hidden) go(); });
}

/* ===================== REVEAL ===================== */
function initReveal(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

/* ===================== PAGE TRANSITIONS ===================== */
function initTransitions(){
  if(!document.querySelector('.page-curtain')){
    const c=document.createElement('div'); c.className='page-curtain'; document.body.appendChild(c);
  }
  document.addEventListener('click', e=>{
    const a=e.target.closest('a'); if(!a) return;
    const href=a.getAttribute('href')||'';
    if(a.target==='_blank'||a.hasAttribute('download')) return;
    if(href.startsWith('http')||href.startsWith('tel:')||href.startsWith('mailto:')||href.startsWith('#')||href.startsWith('javascript')) return;
    if(!/\.html($|\?)/.test(href)) return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(()=>{ window.location.href=href; }, 420);
  });
}

/* ===================== SHOP ===================== */
let currentFilter='all';
function productCard(p){
  const lang=getLang();
  const tag = p.tag ? `<span class="tag">${lang==='sq'?(p.tag==='pop'?'Popullore':'Premium'):(p.tag==='pop'?'Popular':'Premium')}</span>` : '';
  return `<article class="product reveal">
    <a class="ph" href="product.html?id=${p.id}">${tag}<img src="${IMG_SM(p.imgs[0])}" alt="${p.name[lang]}" loading="lazy"></a>
    <div class="info">
      <span class="cat">${CATS[p.cat][lang]}</span>
      <h3>${p.name[lang]}</h3>
      <div class="price">${priceFmt(p.price)}</div>
      <a class="view" href="product.html?id=${p.id}">${t('view')}</a>
    </div>
  </article>`;
}
function renderShop(filter){
  currentFilter = filter||'all';
  const grid=document.getElementById('shopGrid'); if(!grid) return;
  const list = currentFilter==='all' ? PRODUCTS : PRODUCTS.filter(p=>p.cat===currentFilter);
  grid.innerHTML = list.map(productCard).join('');
  // filter buttons
  const fbar=document.getElementById('filters');
  if(fbar && !fbar.dataset.built){
    fbar.dataset.built='1';
    fbar.innerHTML = Object.keys(CATS).map(c=>`<button data-cat="${c}" class="${c==='all'?'active':''}">${CATS[c][getLang()]}</button>`).join('');
    fbar.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      fbar.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
      b.classList.add('active'); renderShop(b.dataset.cat);
    }));
  } else if(fbar){
    fbar.querySelectorAll('button').forEach(b=>b.textContent=CATS[b.dataset.cat][getLang()]);
  }
  initReveal(); guardImages(grid);
}

/* ===================== FEATURED (home) ===================== */
function renderFeatured(){
  const grid=document.getElementById('featGrid'); if(!grid) return;
  const ids=(grid.dataset.ids||'rose-premium,tulip-standard,peony,box-roses').split(',');
  grid.innerHTML=ids.map(id=>{const p=findProduct(id.trim()); return p?productCard(p):'';}).join('');
  initReveal(); guardImages(grid);
}

/* ===================== PRODUCT DETAIL ===================== */
function renderProduct(){
  const root=document.getElementById('pdRoot'); if(!root) return;
  const lang=getLang();
  const id=new URLSearchParams(location.search).get('id');
  const p=findProduct(id)||PRODUCTS[0];
  const feats = lang==='sq'
    ? ['Lule të freskëta, të përzgjedhura me dorë','Dërgesa në të njëjtën ditë në Tiranë','Kartolinë falas me mesazhin tuaj']
    : ['Fresh, hand-selected flowers','Same-day delivery across Tirana','Free gift card with your message'];
  const orderTxt = (lang==='sq'?'Pershendetje! Dua te porosis: ':'Hello! I would like to order: ') + p.name[lang] + ' (' + priceFmt(p.price) + ')';
  root.innerHTML = `
    <a class="backlink" href="shop.html">${t('back_shop')}</a>
    <div class="pd">
      <div class="gallery">
        <div class="main"><img id="pdMain" src="${IMG(p.imgs[0])}" alt="${p.name[lang]}"></div>
        <div class="thumbs">${p.imgs.map((im,idx)=>`<img class="${idx===0?'sel':''}" src="${IMG_SM(im)}" data-full="${IMG(im)}" alt="thumb">`).join('')}</div>
      </div>
      <div class="detail">
        <div class="cat">${CATS[p.cat][lang]}</div>
        <h1>${p.name[lang]}</h1>
        <div class="price">${priceFmt(p.price)}</div>
        <p class="desc">${p.desc[lang]}</p>
        <ul class="feat">${feats.map(f=>`<li>${f}</li>`).join('')}</ul>
        <div class="cta-row">
          <a class="btn btn-gold" target="_blank" rel="noopener" href="${waLink(orderTxt)}">${t('order_wa')}</a>
          <a class="btn btn-dark" href="tel:+${WA}">${t('cta_call')}</a>
        </div>
      </div>
    </div>`;
  // thumbnail switching
  const main=document.getElementById('pdMain');
  root.querySelectorAll('.thumbs img').forEach(th=>th.addEventListener('click',()=>{
    root.querySelectorAll('.thumbs img').forEach(x=>x.classList.remove('sel'));
    th.classList.add('sel'); main.src=th.dataset.full;
  }));
  // related
  const rel=document.getElementById('relatedGrid');
  if(rel){
    const others=PRODUCTS.filter(x=>x.id!==p.id && x.cat===p.cat).concat(PRODUCTS.filter(x=>x.id!==p.id && x.cat!==p.cat)).slice(0,4);
    rel.innerHTML=others.map(productCard).join('');
  }
  document.querySelectorAll('[data-related-title]').forEach(el=>el.textContent=t('related'));
  if(window.PAGE_TITLE) document.title = p.name[lang] + ' — Lujon Flowers';
  // inject Product + Breadcrumb structured data for SEO
  const SITE='https://lujon-flowers.com';
  const schema={
    "@context":"https://schema.org","@type":"Product",
    "name":p.name[lang],"image":p.imgs.map(IMG),"description":p.desc[lang],
    "brand":{"@type":"Brand","name":"Lujon Flowers"},"category":CATS[p.cat][lang],
    "offers":{"@type":"Offer","priceCurrency":"ALL","price":p.price,"availability":"https://schema.org/InStock",
      "url":`${SITE}/product.html?id=${p.id}`,"seller":{"@type":"Florist","name":"Lujon Flowers"}}
  };
  const crumbs={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":lang==='sq'?'Kreu':'Home',"item":SITE+'/'},
    {"@type":"ListItem","position":2,"name":lang==='sq'?'Dyqani':'Shop',"item":SITE+'/shop.html'},
    {"@type":"ListItem","position":3,"name":p.name[lang],"item":`${SITE}/product.html?id=${p.id}`}
  ]};
  let sc=document.getElementById('pdSchema');
  if(!sc){ sc=document.createElement('script'); sc.type='application/ld+json'; sc.id='pdSchema'; document.head.appendChild(sc); }
  sc.textContent=JSON.stringify([schema,crumbs]);
  let can=document.querySelector('link[rel="canonical"]');
  if(!can){ can=document.createElement('link'); can.rel='canonical'; document.head.appendChild(can); }
  can.href=`${SITE}/product.html?id=${p.id}`;
  // og meta
  const setMeta=(prop,val)=>{let m=document.querySelector(`meta[property="${prop}"]`);if(!m){m=document.createElement('meta');m.setAttribute('property',prop);document.head.appendChild(m);}m.content=val;};
  setMeta('og:title',p.name[lang]+' — Lujon Flowers');
  setMeta('og:description',p.desc[lang]);
  setMeta('og:image',IMG(p.imgs[0]));
  setMeta('og:url',`${SITE}/product.html?id=${p.id}`);
  initReveal(); guardImages(root);
}

/* ===================== FAQ ACCORDION ===================== */
function initFAQ(){
  document.querySelectorAll('.faq-item').forEach(item=>{
    const q=item.querySelector('.faq-q'), a=item.querySelector('.faq-a');
    q.addEventListener('click',()=>{
      const open=item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(x=>{x.classList.remove('open');x.querySelector('.faq-a').style.maxHeight=null;});
      if(!open){ item.classList.add('open'); a.style.maxHeight=a.scrollHeight+'px'; }
    });
  });
}

/* ===================== INTRO (home only) ===================== */
function initIntro(){
  const intro=document.getElementById('intro'); if(!intro) return;
  const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  const seen=sessionStorage.getItem('introSeen');
  const scenes=[...intro.querySelectorAll('.scene')];
  const bars=[...intro.querySelectorAll('.intro-progress span')];
  function finish(){
    intro.classList.add('hide');
    setTimeout(()=>{ intro.style.display='none'; const hv=document.getElementById('heroVid'); if(hv){try{hv.play();}catch(e){}} },1000);
    document.body.style.overflow='';
  }
  scenes.forEach(s=>{
    const p=document.createElement('div'); p.className='poster'; p.style.backgroundImage=`url('${s.dataset.poster}')`; s.appendChild(p);
    const v=document.createElement('video'); v.muted=true; v.playsInline=true; v.setAttribute('muted',''); v.setAttribute('playsinline',''); v.preload='auto';
    const src=document.createElement('source'); src.src=s.dataset.vid; src.type='video/mp4'; v.appendChild(src); s.appendChild(v); s._v=v;
  });
  if(reduce||seen){ finish(); return; }
  sessionStorage.setItem('introSeen','1');
  document.body.style.overflow='hidden';
  const DUR=1500; let i=-1, timer;
  function next(){
    i++;
    if(i>=scenes.length){ finish(); return; }
    scenes.forEach(s=>s.classList.remove('on'));
    bars.forEach((b,bi)=>{ if(bi<i) b.classList.add('fill'); });
    const s=scenes[i]; s.classList.add('on'); bars[i].classList.add('fill');
    const v=s._v; if(v){ try{ v.currentTime=0; v.play().catch(()=>{}); }catch(e){} }
    timer=setTimeout(next,DUR);
  }
  next();
  const skip=document.getElementById('skipIntro');
  if(skip) skip.addEventListener('click',()=>{ clearTimeout(timer); finish(); });
}

/* ===================== HERO PETALS ===================== */
function initPetals(){
  const hero=document.querySelector('.hero'); if(!hero) return;
  for(let i=0;i<12;i++){
    const p=document.createElement('div'); p.className='petal';
    const sz=(9+Math.random()*10); p.style.width=p.style.height=sz+'px';
    p.style.left=Math.random()*100+'%';
    p.style.animationDuration=(7+Math.random()*8)+'s';
    p.style.animationDelay=(Math.random()*10)+'s';
    p.style.opacity=(.3+Math.random()*.5);
    hero.appendChild(p);
  }
}

/* ===================== BOOT ===================== */
document.addEventListener('DOMContentLoaded',()=>{
  buildChrome();
  initNav();
  initTransitions();
  initPetals();
  keepHeroPlaying();
  initScrollProgress();
  initHeadings();
  initCounters();
  initFAQ();
  if(document.getElementById('shopGrid')) renderShop(new URLSearchParams(location.search).get('cat')||'all');
  if(document.getElementById('featGrid')) renderFeatured();
  if(document.getElementById('pdRoot')) renderProduct();
  applyLang(getLang());
  initReveal();
  guardImages(document);
});
