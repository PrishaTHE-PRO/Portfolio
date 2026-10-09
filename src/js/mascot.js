// Vanilla port of page-mascot by Kamran Ahmed (MIT) — https://koboyo.com/page-mascot
// A character that follows the cursor and reacts when clicked. Each character is
// two 3x3 sprite sheets: nine head directions and nine expressions.

const DIRECTIONS = ['up-left', 'up', 'up-right', 'left', 'center', 'right', 'down-left', 'down', 'down-right'];
const REACTIONS = ['blink', 'heart', 'sparkle', 'surprised', 'wink', 'bashful', 'sleepy', 'dizzy', 'delighted'];
// Clockwise from the right, matching atan2 with y pointing down.
const CLOCKWISE = ['right', 'down-right', 'down', 'down-left', 'left', 'up-left', 'up', 'up-right'];
const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.12;
const DEAD_ZONE = 70;
const PAYOFFS = ['heart', 'sparkle', 'delighted'];
const BOOP_PAYOFF = 120;
const BOOP_END = 560;
const SQUASH_MS = 420;
const DIZZY_AFTER = 4;
const DIZZY_WINDOW = 1600;
const DIZZY_END = 1100;
const SQUASH = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' },
];

// background-size 300% makes each cell a clean 0/50/100% step on both axes.
function cell(index) {
  return `${(index % 3) * 50}% ${Math.floor(index / 3) * 50}%`;
}

function wrap(angle) {
  return Math.atan2(Math.sin(angle), Math.cos(angle));
}

export function initMascot(button, { directions, reactions }) {
  if (!button) return;

  const squash = button.querySelector('.mascot__body');
  const dirLayer = button.querySelector('.mascot__layer--directions');
  const reactLayer = button.querySelector('.mascot__layer--reactions');
  dirLayer.style.backgroundImage = `url(${directions})`;
  reactLayer.style.backgroundImage = `url(${reactions})`;

  let direction = 'center';
  let reaction = null;
  let timers = [];
  const boops = { count: 0, at: 0 };

  const render = () => {
    dirLayer.style.backgroundPosition = cell(DIRECTIONS.indexOf(direction));
    reactLayer.style.backgroundPosition = cell(REACTIONS.indexOf(reaction ?? 'blink'));
    dirLayer.style.opacity = reaction ? 0 : 1;
    reactLayer.style.opacity = reaction ? 1 : 0;
  };
  const setDirection = (next) => {
    if (next === direction) return;
    direction = next;
    render();
  };
  const setReaction = (next) => {
    reaction = next;
    render();
  };
  render();

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let sector = -1;
    let pointer = null;
    const aim = () => {
      if (!pointer) return;
      const box = button.getBoundingClientRect();
      const dx = pointer.x - (box.left + box.width / 2);
      const dy = pointer.y - (box.top + box.height / 2);
      // Scale the dead zone with the rendered size so a big mascot settles too.
      if (Math.hypot(dx, dy) < Math.max(DEAD_ZONE, box.width / 2)) {
        sector = -1;
        setDirection('center');
        return;
      }
      // Hold the current sector until the pointer is well past its edge.
      const angle = Math.atan2(dy, dx);
      if (sector !== -1 && Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS) {
        return;
      }
      sector = (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length;
      setDirection(CLOCKWISE[sector]);
    };
    window.addEventListener('pointermove', (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      aim();
    }, { passive: true });
    window.addEventListener('scroll', aim, { passive: true });
  }

  button.addEventListener('click', () => {
    timers.forEach(window.clearTimeout);
    timers = [];
    const later = (ms, next) => {
      timers.push(window.setTimeout(() => setReaction(next), ms));
    };

    const now = Date.now();
    boops.count = now - boops.at < DIZZY_WINDOW ? boops.count + 1 : 1;
    boops.at = now;

    if (boops.count >= DIZZY_AFTER) {
      boops.count = 0;
      setReaction('dizzy');
      later(DIZZY_END, null);
    } else {
      setReaction('blink');
      later(BOOP_PAYOFF, PAYOFFS[(boops.count - 1) % PAYOFFS.length]);
      later(BOOP_END, null);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // Per-keyframe easing with the effect itself linear: an easing on the effect
    // would reinterpret every offset and front-load the whole bounce.
    squash.animate(SQUASH, { duration: SQUASH_MS, easing: 'linear' });
  });
}
