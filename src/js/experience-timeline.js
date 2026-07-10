import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initExperienceTimeline(timeline) {
  if (!timeline) return;

  const line = timeline.querySelector('.about-experience__line');
  const items = gsap.utils.toArray('.about-experience__item', timeline);
  const dots = gsap.utils.toArray('.about-experience__dot', timeline);

  if (!line || !items.length) return;

  gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });
  gsap.set(dots, { scale: 0, transformOrigin: 'center center' });

  gsap.to(line, {
    scaleY: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: timeline,
      start: 'top 75%',
      end: 'bottom 65%',
      scrub: 0.5,
    },
  });

  items.forEach((item, i) => {
    const dot = dots[i];

    gsap.fromTo(
      item,
      { opacity: 0, x: 28 },
      {
        opacity: 1,
        x: 0,
        duration: 0.65,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    if (dot) {
      gsap.fromTo(
        dot,
        { scale: 0 },
        {
          scale: 1,
          duration: 0.5,
          ease: 'back.out(2.5)',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  });
}
