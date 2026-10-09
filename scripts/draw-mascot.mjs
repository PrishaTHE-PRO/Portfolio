// Draws the "Prisha" chibi mascot as vector art and renders the two 3x3 sprite
// sheets used by src/js/mascot.js (nine head directions, nine reactions).
//
//   node scripts/draw-mascot.mjs
//
// Writes public/mascots/prisha-directions.webp and prisha-reactions.webp.
// Set CHROMIUM_PATH if Playwright's bundled browser is not installed.

import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const CELL = 360;
const OUT = resolve('public/mascots');

const C = {
  line: '#2b1a14',
  skin: '#d9a07a',
  skinShade: '#bf8461',
  blush: '#ef8f8a',
  hair: '#3a2119',
  hairLight: '#7a3f25',
  hairGlow: '#b0582d',
  top: '#fdfbf6',
  topShade: '#e4ded3',
  gold: '#d9a83a',
  frame: '#c7aeb0',
  iris: '#3d2418',
  mouth: '#7a2f2a',
  tongue: '#e0706b',
  heart: '#ef5a6f',
  spark: '#f2c14e',
};

const S = `stroke="${C.line}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"`;

// ---------- static body (identical in every cell, so nothing jumps) ----------

function backHair(dx, dy) {
  // Long hair behind the shoulders; follows the head a little at the top only.
  const t = `translate(${dx * 0.5} ${dy * 0.4})`;
  return `
  <g transform="${t}">
    <path d="M 96 150 C 88 70 140 44 182 46 C 228 46 276 74 268 150
             C 274 210 286 262 292 318 C 270 330 248 326 236 318
             C 226 270 214 236 206 214 L 156 214
             C 146 240 132 280 124 320 C 110 328 86 330 70 318
             C 78 262 90 210 96 150 Z"
          fill="${C.hair}" ${S}/>
    <path d="M 252 170 C 262 220 272 264 280 306" fill="none" stroke="${C.hairLight}" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
    <path d="M 108 176 C 100 226 92 266 86 304" fill="none" stroke="${C.hairGlow}" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
  </g>`;
}

function body() {
  return `<g transform="translate(0 -14)">
  <!-- neck -->
  <path d="M 162 196 L 162 262 L 198 262 L 198 196 Z" fill="${C.skin}" ${S}/>
  <path d="M 163 214 Q 180 226 197 214 L 197 200 L 163 200 Z" fill="${C.skinShade}"/>
  <!-- shoulders / chest skin -->
  <path d="M 118 288 Q 126 262 162 254 L 198 254 Q 234 262 242 288 L 242 320 L 118 320 Z" fill="${C.skin}" ${S}/>
  <!-- necklace -->
  <path d="M 162 256 Q 180 286 198 256" fill="none" stroke="${C.gold}" stroke-width="2.2"/>
  <circle cx="180" cy="279" r="4.2" fill="none" stroke="${C.gold}" stroke-width="2.4"/>
  <!-- top: square neckline -->
  <path d="M 112 296 Q 116 280 140 276 L 148 276 L 148 302 Q 180 306 212 302 L 212 276 L 220 276
           Q 244 280 248 296 L 258 400 L 102 400 Z"
        fill="${C.top}" ${S}/>
  <path d="M 150 316 Q 180 322 210 316" fill="none" stroke="${C.topShade}" stroke-width="3" stroke-linecap="round"/>
  <!-- puff sleeves -->
  <path d="M 84 330 C 70 300 86 270 118 270 C 140 270 152 290 148 312 C 144 334 104 346 84 330 Z" fill="${C.top}" ${S}/>
  <path d="M 276 330 C 290 300 274 270 242 270 C 220 270 208 290 212 312 C 216 334 256 346 276 330 Z" fill="${C.top}" ${S}/>
  <path d="M 100 290 Q 108 300 104 318 M 124 282 Q 132 298 128 320" fill="none" stroke="${C.topShade}" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 260 290 Q 252 300 256 318 M 236 282 Q 228 298 232 320" fill="none" stroke="${C.topShade}" stroke-width="2.5" stroke-linecap="round"/></g>`;
}

function frontLock(dx, dy) {
  // The lock that falls forward over her (viewer's right) shoulder, as in the photo.
  const t = `translate(${dx * 0.6} ${dy * 0.4})`;
  return `
  <g transform="${t}">
    <path d="M 232 196 C 254 226 266 258 262 290 C 258 312 262 328 272 342
             C 252 346 238 334 234 314 C 228 290 236 262 222 232 Z"
          fill="${C.hair}" ${S}/>
    <path d="M 238 226 C 250 252 252 280 248 310" fill="none" stroke="${C.hairGlow}" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
  </g>`;
}

// ---------- head ----------

function eyesOpen({ px = 0, py = 0, wide = false } = {}) {
  const ry = wide ? 16 : 14;
  const rx = wide ? 13 : 11.5;
  return [150, 210].map((x) => `
    <ellipse cx="${x + px}" cy="${160 + py}" rx="${rx}" ry="${ry}" fill="${C.iris}"/>
    <circle cx="${x + px + 4}" cy="${154 + py}" r="${wide ? 5 : 4.5}" fill="#fff"/>
    <circle cx="${x + px - 4}" cy="${166 + py}" r="2" fill="#fff" opacity="0.85"/>
    <path d="M ${x - 15} ${147} Q ${x} ${139} ${x + 15} ${147}" fill="none" stroke="${C.line}" stroke-width="3.2" stroke-linecap="round"/>`).join('');
}

const closedEye = (x, y = 162) =>
  `<path d="M ${x - 13} ${y} Q ${x} ${y + 9} ${x + 13} ${y}" fill="none" stroke="${C.line}" stroke-width="3.4" stroke-linecap="round"/>`;
const happyEye = (x, y = 164) =>
  `<path d="M ${x - 13} ${y} Q ${x} ${y - 13} ${x + 13} ${y}" fill="none" stroke="${C.line}" stroke-width="3.6" stroke-linecap="round"/>`;
const heartAt = (x, y, s, fill = C.heart) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M 0 6 C -10 -4 -6 -14 0 -8 C 6 -14 10 -4 0 6 Z" fill="${fill}" stroke="${C.line}" stroke-width="${1.6 / s}" stroke-linejoin="round"/>`;
const star = (x, y, r, fill = C.spark) => {
  const pts = [];
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.38 : r;
    pts.push(`${(x + Math.cos(a) * rr).toFixed(1)},${(y + Math.sin(a) * rr).toFixed(1)}`);
  }
  return `<polygon points="${pts.join(' ')}" fill="${fill}" stroke="${C.line}" stroke-width="1.6" stroke-linejoin="round"/>`;
};
const spiral = (x, y) =>
  `<path d="M ${x} ${y} m -1 0 a 2 2 0 1 1 3 1 a 5 5 0 1 1 -8 -3 a 8 8 0 1 1 14 6 a 11 11 0 1 1 -18 -10" fill="none" stroke="${C.line}" stroke-width="2.6" stroke-linecap="round"/>`;

const brows = (lift = 0) => `
  <path d="M 132 ${126 - lift} Q 148 ${118 - lift} 164 ${124 - lift}" fill="none" stroke="${C.hair}" stroke-width="4.5" stroke-linecap="round"/>
  <path d="M 196 ${124 - lift} Q 212 ${118 - lift} 228 ${126 - lift}" fill="none" stroke="${C.hair}" stroke-width="4.5" stroke-linecap="round"/>`;

const glasses = () => `
  <g fill="#fff" fill-opacity="0.14" stroke="${C.frame}" stroke-width="4.2">
    <rect x="124" y="140" width="52" height="40" rx="13"/>
    <rect x="184" y="140" width="52" height="40" rx="13"/>
  </g>
  <path d="M 176 154 Q 180 150 184 154" fill="none" stroke="${C.frame}" stroke-width="3.6"/>
  <path d="M 124 152 L 112 148 M 236 152 L 248 148" stroke="${C.frame}" stroke-width="3.6" stroke-linecap="round"/>
  <path d="M 130 146 L 140 146 M 190 146 L 200 146" stroke="#fff" stroke-width="2.4" stroke-linecap="round" opacity="0.7"/>`;

const nose = `<path d="M 178 186 Q 181 190 184 187" fill="none" stroke="${C.skinShade}" stroke-width="2.6" stroke-linecap="round"/>`;

const MOUTHS = {
  smile: `<path d="M 163 198 Q 180 200 197 198 Q 194 216 180 216 Q 166 216 163 198 Z" fill="${C.mouth}" ${S}/>
          <path d="M 166 200 Q 180 202 194 200 L 193 205 Q 180 207 167 205 Z" fill="#fff"/>`,
  big: `<path d="M 160 196 Q 180 199 200 196 Q 198 224 180 224 Q 162 224 160 196 Z" fill="${C.mouth}" ${S}/>
        <path d="M 164 198 Q 180 201 196 198 L 195 204 Q 180 206 165 204 Z" fill="#fff"/>
        <path d="M 170 218 Q 180 212 190 218 Q 186 222 180 222 Q 174 222 170 218 Z" fill="${C.tongue}"/>`,
  o: `<ellipse cx="180" cy="206" rx="7" ry="9" fill="${C.mouth}" ${S}/>`,
  small: `<path d="M 172 204 Q 180 209 188 204" fill="none" stroke="${C.line}" stroke-width="3" stroke-linecap="round"/>`,
  tongue: `<path d="M 166 200 Q 180 204 194 198" fill="none" stroke="${C.line}" stroke-width="3" stroke-linecap="round"/>
           <path d="M 180 202 Q 181 212 188 212 Q 194 211 192 200" fill="${C.tongue}" ${S}/>`,
  wavy: `<path d="M 166 206 Q 170 200 174 206 Q 178 212 182 206 Q 186 200 190 206 Q 194 212 196 206" fill="none" stroke="${C.line}" stroke-width="3" stroke-linecap="round"/>`,
  sleepy: `<ellipse cx="180" cy="206" rx="5" ry="4" fill="${C.mouth}" ${S}/>`,
};

function head({ dx = 0, dy = 0, face }) {
  const hx = dx * 11, hy = dy * 8;
  const fx = dx * 12, fy = dy * 8;
  const rot = dx * 3 + dx * dy * -1.5;
  return `
  <g transform="translate(${hx} ${hy}) rotate(${rot} 180 210)">
    <!-- ears + gold hoops -->
    <g transform="translate(${-fx * 0.4} 0)">
      <ellipse cx="104" cy="168" rx="12" ry="16" fill="${C.skin}" ${S}/>
      <ellipse cx="256" cy="168" rx="12" ry="16" fill="${C.skin}" ${S}/>
      <circle cx="102" cy="188" r="5.5" fill="none" stroke="${C.gold}" stroke-width="2.6"/>
      <circle cx="258" cy="188" r="5.5" fill="none" stroke="${C.gold}" stroke-width="2.6"/>
    </g>
    <!-- face -->
    <path d="M 106 150 C 106 92 140 70 180 70 C 220 70 254 92 254 150
             C 254 196 226 232 180 232 C 134 232 106 196 106 150 Z"
          fill="${C.skin}" ${S}/>
    <g transform="translate(${fx} ${fy})">
      <ellipse cx="138" cy="194" rx="15" ry="8" fill="${C.blush}" opacity="${face.blush ?? 0.45}"/>
      <ellipse cx="222" cy="194" rx="15" ry="8" fill="${C.blush}" opacity="${face.blush ?? 0.45}"/>
      ${face.brows ?? brows()}
      ${face.eyes}
      ${face.noGlasses ? '' : glasses()}
      ${nose}
      ${face.mouth}
      ${face.extra ?? ''}
    </g>
    <!-- bangs: soft middle part, swept to the sides -->
    <g transform="translate(${fx * 0.35} ${fy * 0.2})">
      <path d="M 100 168 C 92 96 132 52 182 54 C 232 54 270 96 260 168
               C 254 138 246 116 230 104 C 214 96 196 92 184 90
               C 170 96 150 104 132 118 C 118 130 108 148 100 168 Z"
            fill="${C.hair}" ${S}/>
      <path d="M 184 90 C 190 74 196 64 200 58" fill="none" stroke="${C.line}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M 132 76 C 150 64 168 60 182 60" fill="none" stroke="${C.hairGlow}" stroke-width="4" stroke-linecap="round" opacity="0.8"/>
      <path d="M 210 66 C 232 74 246 92 252 120" fill="none" stroke="${C.hairLight}" stroke-width="3.5" stroke-linecap="round" opacity="0.7"/>
      <!-- side locks framing the face -->
      <path d="M 108 140 C 100 180 104 214 116 238 C 108 240 98 232 94 220 C 88 196 92 160 102 132 Z" fill="${C.hair}" ${S}/>
      <path d="M 252 140 C 260 180 256 214 244 238 C 252 240 262 232 266 220 C 272 196 268 160 258 132 Z" fill="${C.hair}" ${S}/>
    </g>
  </g>`;
}

// ---------- the nine faces of each sheet ----------

const DIRS = [[-1, -1], [0, -1], [1, -1], [-1, 0], [0, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];

function lookFace(dx, dy) {
  return { eyes: eyesOpen({ px: dx * 3.5, py: dy * 3 }), mouth: MOUTHS.smile };
}

const REACTIONS = [
  // blink
  { eyes: closedEye(150) + closedEye(210), mouth: MOUTHS.smile },
  // heart
  {
    eyes: heartAt(150, 160, 1.5) + heartAt(210, 160, 1.5),
    mouth: MOUTHS.big,
    blush: 0.7,
    extra: heartAt(272, 92, 1.6) + heartAt(292, 124, 1.0),
  },
  // sparkle
  {
    eyes: eyesOpen({ wide: true }) + star(146, 158, 6, '#fff') + star(206, 158, 6, '#fff'),
    mouth: MOUTHS.big,
    extra: star(84, 96, 12) + star(276, 84, 14) + star(292, 134, 8),
  },
  // surprised
  { eyes: eyesOpen({ wide: true }), mouth: MOUTHS.o, brows: brows(8), blush: 0.3 },
  // wink
  {
    eyes: eyesOpen().replace(/[\s\S]*?(?=<ellipse cx="210)/, '') + happyEye(150),
    mouth: MOUTHS.tongue,
    extra: star(84, 112, 9),
  },
  // bashful
  {
    eyes: happyEye(150) + happyEye(210),
    mouth: MOUTHS.small,
    blush: 0.95,
    extra: `<path d="M 128 192 l 6 -6 M 138 194 l 6 -6 M 212 192 l 6 -6 M 222 194 l 6 -6" stroke="${C.mouth}" stroke-width="2" stroke-linecap="round" opacity="0.6"/>`,
  },
  // sleepy
  {
    eyes: closedEye(150, 164) + closedEye(210, 164),
    brows: brows(-4),
    mouth: MOUTHS.sleepy,
    blush: 0.35,
    extra: `<g font-family="Georgia, serif" font-weight="700" fill="#7a8fb8" stroke="${C.line}" stroke-width="1">
      <text x="262" y="102" font-size="26">z</text><text x="282" y="76" font-size="20">z</text></g>`,
  },
  // dizzy
  {
    eyes: spiral(150, 160) + spiral(210, 160),
    mouth: MOUTHS.wavy,
    blush: 0.3,
    extra: star(110, 66, 9) + star(250, 62, 9) + star(286, 104, 7),
  },
  // delighted
  { eyes: happyEye(150) + happyEye(210), mouth: MOUTHS.big, blush: 0.7, extra: star(84, 104, 9) + star(280, 96, 10) },
];

// ---------- sheet assembly ----------

function character(face, dx = 0, dy = 0) {
  return `${backHair(dx, dy)}${body()}${frontLock(dx, dy)}${head({ dx, dy, face })}`;
}

function sheet(cells) {
  const tiles = cells.map(({ face, dx, dy }, i) => {
    const x = (i % 3) * CELL, y = Math.floor(i / 3) * CELL;
    return `<g transform="translate(${x} ${y})"><g mask="url(#fade)">${character(face, dx, dy)}</g></g>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${CELL * 3}" height="${CELL * 3}" viewBox="0 0 ${CELL * 3} ${CELL * 3}">
    <defs>
      <linearGradient id="fadeGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.86" stop-color="#fff"/>
        <stop offset="0.975" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
      <mask id="fade" maskUnits="userSpaceOnUse" x="0" y="0" width="${CELL}" height="${CELL}">
        <rect width="${CELL}" height="${CELL}" fill="url(#fadeGrad)"/>
      </mask>
    </defs>${tiles}</svg>`;
}

const directionsSvg = sheet(DIRS.map(([dx, dy]) => {
  const n = dx && dy ? 0.8 : 1;
  return { face: lookFace(dx, dy), dx: dx * n, dy: dy * n };
}));
const reactionsSvg = sheet(REACTIONS.map((face) => ({ face, dx: 0, dy: 0 })));

mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: CELL * 3, height: CELL * 3 } });
for (const [name, svg] of [['directions', directionsSvg], ['reactions', reactionsSvg]]) {
  // Rasterise in the page so the sheet comes out as WebP with its transparency intact.
  const dataUrl = await page.evaluate(async (markup) => {
    const img = new Image();
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;
    await img.decode();
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0);
    return canvas.toDataURL('image/webp', 0.9);
  }, svg);
  writeFileSync(`${OUT}/prisha-${name}.webp`, Buffer.from(dataUrl.split(',')[1], 'base64'));
}
await browser.close();
console.log('wrote', `${OUT}/prisha-directions.webp`, `${OUT}/prisha-reactions.webp`);
