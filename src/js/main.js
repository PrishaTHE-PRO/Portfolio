import '../styles/index.scss';
import InfiniteGrid from './infinite-grid';
import { initPageTransitions, playEnterTransition } from './transitions';
import { initGlitchText } from './glitch-text';

const captions = [
  'Waiting for the Train 2024',
  'Sad Mis-Step <br>12 x 16 inch C type hand print <br>Edition of 1 Plus an additional artist Proof <br>2024',
  'Niagara Falls<br>The Canadian boat<br>The border between New York, USA, and Canada<br>2024',
  'Tornoto, Canada <br>Diversity Our Strength<br>Toronto\'s skyline<br>2024',
  'Wonder <br>Grove Park<br>Watching the wonder in the world we once played in<br>2024',
  'Lady in Rain <br>Chicago, Illinois <br>Planned for a Sunny day, but the day turned around<br>2024',
  'Time<br>Chicago, Illinois<br>Can\'t let time pass without notice<br>2025',
  'The Wild<br>Wildlife Safari<br>Life in the Wild is unpredictable<br>2024',
  'Eiffel Tower<br>Paris, France<br>A child\'s last visit to Paris<br>2018',
  'Louis Vitton<br>Miami, Florida<br>Because you visit the city\'s luxury district<br>2025',
  'Tennis<br>UCLA, Los Angeles<br>The summer games begin<br>2019',
  'Taj Mahal<br>A World\'s Wonder<br>Breaking the 15 year wait<br>2023',
  'St Paul\'s Cathedral<br>Busy London Morning<br>Every road leads to the dome<br>2019',
];

const sources = [
  { src: 'IMG_0274.JPG', naturalW: 1147, naturalH: 1600, caption: captions[0] },
  { src: 'IMG_0481.JPG', naturalW: 1094, naturalH: 1600, caption: captions[1] },
  { src: 'IMG_0972.JPG', naturalW: 1600, naturalH: 1176, caption: captions[2] },
  { src: 'IMG_1066.JPG', naturalW: 1600, naturalH: 1066, caption: captions[3] },
  { src: 'IMG_1590.JPG', naturalW: 1174, naturalH: 1600, caption: captions[4] },
  { src: 'IMG_1592.JPG', naturalW: 1103, naturalH: 1600, caption: captions[5] },
  { src: 'IMG_2699.JPG', naturalW: 1176, naturalH: 1600, caption: captions[6] },
  { src: 'IMG_2782.jpg', naturalW: 1600, naturalH: 1206, caption: captions[7] },
  { src: 'IMG_3572.JPG', naturalW: 1200, naturalH: 1600, caption: captions[8] },
  { src: 'IMG_4434.JPG', naturalW: 1219, naturalH: 1600, caption: captions[9] },
  { src: 'IMG_7174.JPG', naturalW: 1600, naturalH: 1066, caption: captions[10] },
  { src: 'IMG_8340.JPG', naturalW: 1205, naturalH: 1600, caption: captions[11] },
  { src: 'IMG_9792.JPG', naturalW: 1200, naturalH: 1600, caption: captions[12] },
];

// x, y, w — height is derived from each image's natural aspect ratio
const data = [
  // top band
  { x: 20, y: 92, w: 220 },
  { x: 220, y: 18, w: 285 },
  { x: 520, y: 118, w: 245 },
  { x: 870, y: 26, w: 250 },
  { x: 1135, y: 125, w: 290 },
  // side accents
  { x: 78, y: 405, w: 250 },
  { x: 1188, y: 390, w: 260 },
  // bottom band
  { x: 5, y: 730, w: 305 },
  { x: 330, y: 835, w: 245 },
  { x: 620, y: 715, w: 270 },
  { x: 855, y: 825, w: 315 },
  { x: 1095, y: 690, w: 275 },
  { x: 1390, y: 785, w: 230 },
];

function setRvw() {
  document.documentElement.style.setProperty(
    '--rvw',
    `${document.documentElement.clientWidth / 100}px`
  );
}

setRvw();
window.addEventListener('resize', setRvw);

initPageTransitions();
playEnterTransition();

initGlitchText(document.querySelector('.cover__persona'), [
  'photographer',
  'software developer',
  'entrepreneur',
  'traveler',
  'student',
  'computer scientist',
  'tech enthusiast',
]);

window.addEventListener('load', () => {
  new InfiniteGrid({
    el: document.querySelector('#images'),
    sources,
    data,
    originalSize: { w: 1522, h: 1238 },
  });
});
