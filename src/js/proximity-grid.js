import gsap from 'gsap';

export function initProximityGrid(stage) {
  if (!stage) return;

  const cards = gsap.utils.toArray('.about-tool__card', stage);
  const radius = 200;
  const maxScale = 2.5;
  const dur = 0.35;

  stage.addEventListener('mousemove', (e) => {
    const mx = e.clientX;
    const my = e.clientY;

    cards.forEach((card) => {
      const r = card.getBoundingClientRect();
      const d = Math.hypot(
        mx - (r.left + r.width / 2),
        my - (r.top + r.height / 2)
      );
      const p = gsap.utils.clamp(0, 1, gsap.utils.mapRange(0, radius, 1, 0, d));

      gsap.to(card, {
        scale: 1 + (maxScale - 1) * p,
        duration: dur,
        overwrite: true,
        ease: 'power2.out',
      });
    });
  });

  stage.addEventListener('mouseleave', () => {
    cards.forEach((card) => {
      gsap.to(card, {
        scale: 1,
        duration: dur * 2,
        overwrite: true,
        ease: 'power2.out',
      });
    });
  });
}
