const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';});
const destinationsToggle=document.getElementById('destinosToggle');
const destinationsMenu=document.getElementById('destinosMenu');
destinationsToggle.addEventListener('click',()=>{const open=destinationsMenu.classList.toggle('open');destinationsToggle.setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(!e.target.closest('.nav-dropdown')){destinationsMenu.classList.remove('open');destinationsToggle.setAttribute('aria-expanded','false');}});
const cards=[...document.querySelectorAll('.destination-card')];
const chips=[...document.querySelectorAll('.filter-chip')];
const emptyState=document.getElementById('emptyState');
function applyFilters(category='Todos',style='Todos los estilos'){
  let visible=0;
  cards.forEach(card=>{const categoryMatch=category==='Todos'||card.dataset.category===category;const styleMatch=style==='Todos los estilos'||card.dataset.style===style;const show=categoryMatch&&styleMatch;card.hidden=!show;if(show)visible++;});
  chips.forEach(chip=>chip.classList.toggle('active',chip.dataset.filter===category));
  emptyState.hidden=visible!==0;
}
chips.forEach(chip=>chip.addEventListener('click',()=>applyFilters(chip.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(link=>link.addEventListener('click',()=>{applyFilters(link.dataset.filterLink);mainNav.classList.remove('open');}));
document.getElementById('searchButton').addEventListener('click',()=>{applyFilters(document.getElementById('quickCategory').value,document.getElementById('travelStyle').value);document.getElementById('destinos').scrollIntoView({behavior:'smooth'});});
document.getElementById('showAll').addEventListener('click',()=>{document.getElementById('quickCategory').value='Todos';document.getElementById('travelStyle').value='Todos los estilos';applyFilters();});
document.querySelectorAll('.favorite').forEach(button=>button.addEventListener('click',()=>{const saved=button.classList.toggle('saved');button.setAttribute('aria-pressed',String(saved));button.textContent=saved?'♥':'♡';}));
const track=document.getElementById('galleryTrack');
const slides=[...track.children];
const dotsContainer=document.getElementById('galleryDots');
let galleryIndex=0;
function visibleSlides(){return window.innerWidth<=650?1:window.innerWidth<=900?2:3;}
function maxIndex(){return Math.max(0,slides.length-visibleSlides());}
function renderGallery(){galleryIndex=Math.min(galleryIndex,maxIndex());const gap=18;const width=slides[0].getBoundingClientRect().width+gap;track.style.transform=`translateX(${-galleryIndex*width}px)`;dotsContainer.innerHTML='';for(let i=0;i<=maxIndex();i++){const dot=document.createElement('button');dot.setAttribute('aria-label',`Ir a la posición ${i+1}`);dot.classList.toggle('active',i===galleryIndex);dot.addEventListener('click',()=>{galleryIndex=i;renderGallery();});dotsContainer.append(dot);}}
document.getElementById('galleryPrev').addEventListener('click',()=>{galleryIndex=galleryIndex<=0?maxIndex():galleryIndex-1;renderGallery();});
document.getElementById('galleryNext').addEventListener('click',()=>{galleryIndex=galleryIndex>=maxIndex()?0:galleryIndex+1;renderGallery();});
window.addEventListener('resize',renderGallery);
renderGallery();
document.getElementById('travelForm').addEventListener('submit',event=>{event.preventDefault();const name=document.getElementById('visitorName').value.trim();document.getElementById('formMessage').textContent=`¡Gracias, ${name}! Tu idea de viaje quedó lista en esta demostración.`;event.target.reset();});
document.getElementById('year').textContent=new Date().getFullYear();
