import gsap from 'gsap';

const ORIGIN = 'bottom center';
const DURATION = 0.55;
const EASE = 'power3.inOut';

export function getOverlay() {
  return document.querySelector('.page-transition');
}

export function initPageTransitions() {
  document.querySelectorAll('[data-page-transition]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const overlay = getOverlay();
      const isLeavingHome = Boolean(document.querySelector('#hero'));

      if (!overlay) {
        window.location.href = href;
        return;
      }

      sessionStorage.setItem(
        'page-transition',
        isLeavingHome ? 'enter-about' : 'enter-home'
      );

      gsap.set(overlay, { scaleY: 0, transformOrigin: ORIGIN });

      gsap.to(overlay, {
        scaleY: 1,
        duration: DURATION,
        ease: EASE,
        onComplete: () => {
          window.location.href = href;
        },
      });
    });
  });
}

export function playEnterTransition() {
  const overlay = getOverlay();
  const mode = sessionStorage.getItem('page-transition');
  if (!overlay || !mode) return;

  sessionStorage.removeItem('page-transition');
  document.documentElement.classList.remove('page-transition-pending');

  gsap.set(overlay, { scaleY: 1, transformOrigin: ORIGIN });

  const tl = gsap.timeline({
    onComplete: () => {
      gsap.set(overlay, { scaleY: 0 });
    },
  });

  tl.to(overlay, {
    scaleY: 0,
    duration: DURATION,
    ease: EASE,
  });

  if (mode === 'enter-about') {
    tl.fromTo(
      '.about > *',
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power2.out' },
      0.12
    ).fromTo(
      '.page-link--back',
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: 'power2.out' },
      0.2
    );
  }

  if (mode === 'enter-home') {
    tl.fromTo(
      '.cover__content',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      0.12
    ).fromTo(
      '.scroll-hint',
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: 'power2.out' },
      0.2
    );
  }
}
