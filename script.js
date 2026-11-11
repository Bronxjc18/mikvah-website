document.addEventListener('DOMContentLoaded',()=>{
 const t=document.querySelector('.menu-toggle'),n=document.getElementById('site-nav');
 if(t&&n)t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Close Menu':'Open Menu')});
 const nx=document.querySelector('input[name="_next"]'); if(nx&&location.protocol==='https:')nx.value=location.origin+'/thanks/';
 const ss=document.querySelector('.slideshow'); if(!ss)return;
 const sl=[...ss.querySelectorAll('.slide')],c=ss.querySelector('.ss-count'); let i=0;
 const load=k=>{const im=sl[(k+sl.length)%sl.length].querySelector('img'); if(im&&im.dataset.src){im.src=im.dataset.src;im.removeAttribute('data-src')}};
 const go=k=>{sl[i].classList.remove('is-active'); i=(k+sl.length)%sl.length; load(i); sl[i].classList.add('is-active'); load(i+1); load(i-1); c.textContent=(i+1)+' / '+sl.length};
 ss.querySelector('.ss-prev').addEventListener('click',()=>go(i-1));
 ss.querySelector('.ss-next').addEventListener('click',()=>go(i+1));
 ss.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')go(i-1);if(e.key==='ArrowRight')go(i+1)});
 let x0=null; ss.addEventListener('touchstart',e=>{x0=e.touches[0].clientX},{passive:true});
 ss.addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0; if(Math.abs(d)>40)go(d<0?i+1:i-1); x0=null});
 load(sl.length-1);
});
