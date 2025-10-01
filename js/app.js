(function(){
const tablist = document.querySelector('[role="tablist"]');
const tabs = Array.from(tablist?.querySelectorAll('[role="tab"]') || []);
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
const YEAR = document.getElementById('year');
if (YEAR) YEAR.textContent = new Date().getFullYear();


function setActive(tab){
const panelId = tab.getAttribute('aria-controls');
tabs.forEach(t=>{ t.setAttribute('aria-selected', String(t===tab)); t.tabIndex = (t===tab)? 0 : -1; });
panels.forEach(p=>{ p.hidden = (p.id !== panelId); });
const hash = '#' + tab.id.replace('tab-','');
if (location.hash !== hash) history.replaceState(null,'',hash);
try{ localStorage.setItem('activeTab', tab.id); }catch{}
}


tabs.forEach(tab=> tab.addEventListener('click', ()=> setActive(tab)));


tablist?.addEventListener('keydown', (e)=>{
const current = document.activeElement;
const i = tabs.indexOf(current);
if (i === -1) return;
let next = i;
if (e.key === 'ArrowRight') next = (i+1) % tabs.length;
if (e.key === 'ArrowLeft') next = (i-1+tabs.length) % tabs.length;
if (e.key === 'Home') next = 0;
if (e.key === 'End') next = tabs.length - 1;
if (next !== i){ tabs[next].focus(); setActive(tabs[next]); e.preventDefault(); }
});


function initTab(){
const fromHash = location.hash?.replace('#','');
const fromStore = (()=>{ try{return localStorage.getItem('activeTab');}catch{return null;} })();
let toId = 'tab-home';
if (fromHash && document.getElementById('tab-'+fromHash)) toId = 'tab-'+fromHash;
else if (fromStore && document.getElementById(fromStore)) toId = fromStore;
const el = document.getElementById(toId) || tabs[0];
if (el) setActive(el);
}


initTab();
})();