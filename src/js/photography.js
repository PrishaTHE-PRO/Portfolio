import '../styles/photography.scss';
import { asset } from './asset';
import { piles } from './photos-data';
import { initPageTransitions, playEnterTransition } from './transitions';

initPageTransitions();
playEnterTransition();

const listEl   = document.getElementById('photoPiles');
const spreadEl = document.getElementById('photoSpread');
const trackEl  = document.getElementById('spreadTrack');
const titleEl  = document.getElementById('spreadTitle');
const countEl  = spreadEl.querySelector('.photo-spread__count');
const closeEl  = spreadEl.querySelector('.photo-spread__close');

// A pile shows its top photo with the next two peeking out behind it, so the
// stack reads as a physical pile rather than a single cropped thumbnail.
const LAYERS = 3;

function renderPiles() {
  listEl.innerHTML = piles.map((pile, i) => {
    const layers = pile.photos.slice(0, LAYERS).reverse().map((photo, j, arr) => {
      const depth = arr.length - 1 - j;          // 0 == the top photo
      return `
        <div class="photo-pile__layer" data-depth="${depth}">
          <img src="${asset(`photographs/${photo.src}`)}" alt="${depth === 0 ? photo.title : ''}"
               width="${photo.w}" height="${photo.h}" loading="lazy" ${depth === 0 ? '' : 'aria-hidden="true"'}>
        </div>`;
    }).join('');

    return `
      <button type="button" class="photo-pile" data-pile="${i}">
        <span class="photo-pile__stack">${layers}</span>
        <span class="photo-pile__meta">
          <span class="photo-pile__title">${pile.title}</span>
          <span class="photo-pile__count">${pile.photos.length} photos</span>
        </span>
        <span class="photo-pile__blurb">${pile.blurb}</span>
      </button>`;
  }).join('');
}

let lastFocused = null;

function openPile(index) {
  const pile = piles[index];
  if (!pile) return;

  lastFocused = document.activeElement;
  titleEl.textContent = pile.title;
  countEl.textContent = `${pile.photos.length} photos — ${pile.blurb}`;

  // No captions under the photos -- the titles stay in the data and carry
  // through to alt text, but the spread shows the pictures on their own.
  trackEl.innerHTML = pile.photos.map((photo) => `
    <figure class="photo-spread__item">
      <img src="${asset(`photographs/${photo.src}`)}" alt="${photo.title}"
           width="${photo.w}" height="${photo.h}"
           loading="lazy" decoding="async">
    </figure>`).join('');

  trackEl.scrollLeft = 0;
  spreadEl.hidden = false;
  // Next frame, so the opening transition has a state to animate from.
  requestAnimationFrame(() => spreadEl.classList.add('is-open'));
  document.documentElement.classList.add('spread-open');
  closeEl.focus();
}

function closeSpread() {
  if (spreadEl.hidden) return;
  spreadEl.classList.remove('is-open');
  document.documentElement.classList.remove('spread-open');
  const done = () => { spreadEl.hidden = true; trackEl.innerHTML = ''; };
  spreadEl.addEventListener('transitionend', done, { once: true });
  // Belt and braces: if the transition never fires, still close.
  setTimeout(done, 400);
  if (lastFocused) lastFocused.focus();
}

renderPiles();

listEl.addEventListener('click', (e) => {
  const pile = e.target.closest('.photo-pile');
  if (pile) openPile(Number(pile.dataset.pile));
});

spreadEl.addEventListener('click', (e) => {
  if (e.target.closest('[data-spread-close]')) closeSpread();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSpread();
});

// The spread scrolls horizontally; let a normal vertical wheel drive it.
trackEl.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
  e.preventDefault();
  trackEl.scrollLeft += e.deltaY;
}, { passive: false });
