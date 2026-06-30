const GLITCH_CHARS = '█▓▒░<>/\\|@#$%&*';

export function initGlitchText(el, phrases, { interval = 2800, glitchDuration = 340 } = {}) {
  if (!el || !phrases.length) return;

  const textEl = el.querySelector('[data-glitch-text]') || el;
  let index = 0;

  const setPhrase = (phrase) => {
    textEl.textContent = phrase;
    textEl.setAttribute('data-text', phrase);
  };

  const scrambleTo = (target) => {
    const from = textEl.textContent;
    const len = Math.max(from.length, target.length);
    const start = performance.now();

    return new Promise((resolve) => {
      const tick = (now) => {
        const t = Math.min((now - start) / glitchDuration, 1);
        const reveal = Math.floor(t * len);
        let out = '';

        for (let i = 0; i < len; i++) {
          if (i < reveal) {
            out += target[i] ?? '';
          } else if (target[i] === ' ') {
            out += ' ';
          } else {
            out += GLITCH_CHARS[(Math.random() * GLITCH_CHARS.length) | 0];
          }
        }

        textEl.textContent = out.trimEnd() || target;
        textEl.setAttribute('data-text', out.trimEnd() || target);

        if (t < 1) {
          requestAnimationFrame(tick);
        } else {
          setPhrase(target);
          resolve();
        }
      };

      requestAnimationFrame(tick);
    });
  };

  const cycle = async () => {
    el.classList.add('is-glitching');
    index = (index + 1) % phrases.length;
    await scrambleTo(phrases[index]);
    el.classList.remove('is-glitching');
  };

  setPhrase(phrases[0]);

  const timer = setInterval(cycle, interval);
  return () => clearInterval(timer);
}
