(function(){var d=document.documentElement;d.classList.add('js');
var saved=null;try{saved=new URLSearchParams(location.search).get('lang')||localStorage.getItem('ggp-lang')}catch(e){}
function setLang(l){if(!document.querySelector('[data-l="'+l+'"]')&&!document.getElementById(l))return;d.lang=l;
document.querySelectorAll('[data-setlang]').forEach(function(b){b.setAttribute('aria-pressed',b.dataset.setlang===l)});document.querySelectorAll('[data-langselect]').forEach(function(x){x.value=l});
var t=d.getAttribute('data-title-'+l);if(t)document.title=t;try{localStorage.setItem('ggp-lang',l)}catch(e){}
document.dispatchEvent(new CustomEvent('langchange',{detail:l}))}
document.querySelectorAll('[data-setlang]').forEach(function(b){b.addEventListener('click',function(){setLang(b.dataset.setlang)})});
document.querySelectorAll('[data-langselect]').forEach(function(x){x.addEventListener('change',function(){setLang(x.value)})});
setLang(saved||d.lang);
var top=document.querySelector('.top'),st=document.querySelector('.sticky'),hero=document.querySelector('.hero');
function onScroll(){var y=scrollY;if(top)top.classList.toggle('solid',y>30);if(st&&hero)st.classList.toggle('show',y>hero.offsetHeight*.6&&(innerHeight+y)<document.body.scrollHeight-260)}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)})}else document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')});
})();
