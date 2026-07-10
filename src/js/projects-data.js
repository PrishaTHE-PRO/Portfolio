export const projects = [
  {
    title: 'Aura',
    summary: 'A mood-based music recommender that learns your taste over time. Built with React and a Python backend.',
    images: ['https://picsum.photos/seed/aura-portfolio/800/480'],
    github: 'https://github.com/prishaagarwalla',
  },
  {
    title: 'Campus Connect',
    summary: 'Real-time campus event board with RSVP tracking and push notifications for student organizations.',
    images: [
      'https://picsum.photos/seed/campus-1/800/480',
      'https://picsum.photos/seed/campus-2/800/480',
    ],
    github: 'https://github.com/prishaagarwalla',
  },
  {
    title: 'Lens Lab',
    summary: 'Photo batch editor with custom presets and metadata tagging. Inspired by my photography workflow.',
    images: ['https://picsum.photos/seed/lenslab/800/480'],
    github: 'https://github.com/prishaagarwalla',
  },
  {
    title: 'Study Sprint',
    summary: 'Pomodoro timer with session analytics and focus streaks. SwiftUI app with local Core Data storage.',
    images: ['https://picsum.photos/seed/studysprint/800/480'],
    github: 'https://github.com/prishaagarwalla',
  },
  {
    title: 'Voice Notes AI',
    summary: 'Record, transcribe, and summarize voice memos using Deepgram and Claude. Deployed on Supabase Edge Functions.',
    images: [
      'https://picsum.photos/seed/voicenotes-1/800/480',
      'https://picsum.photos/seed/voicenotes-2/800/480',
    ],
    github: 'https://github.com/prishaagarwalla',
  },
  {
    title: 'Portfolio',
    summary: 'This site — infinite photo grid, glitching tagline, and a proximity-based stack showcase. Vite + GSAP.',
    images: ['https://picsum.photos/seed/portfolio-site/800/480'],
    github: 'https://github.com/PrishaTHE-PRO/Portfolio',
  },
];

export function renderProjects(container) {
  if (!container) return;

  container.innerHTML = projects.map(({ title, summary, images, github }) => `
    <article class="about-projects__card">
      <img
        class="about-projects__image"
        src="${images[0]}"
        alt="${title} preview"
        loading="lazy"
      >
      <div class="about-projects__body">
        <h3 class="about-projects__title">${title}</h3>
        <p class="about-projects__summary">${summary}</p>
        <a
          class="about-projects__link"
          href="${github}"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub →</a>
      </div>
    </article>
  `).join('');
}
