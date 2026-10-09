import { asset } from './asset';

// Each project is a card: screenshot, title, summary, stack tags and links.
// Add an entry here and the About page picks it up.
export const projects = [
  {
    title: 'BluPrint',
    image: 'img/bluprint.jpg',
    summary: 'An AI-powered interior design platform that turns room dimensions and inspiration images into personalized 2D + 3D layouts with style-matched furniture.',
    tags: ['React', 'Three.js', 'Express', 'MongoDB', 'OpenAI'],
    github: 'https://github.com/PrishaTHE-PRO/BluPrint',
    demo: 'https://bluprint-iroq.onrender.com/',
  },
  {
    title: 'Overlap',
    image: 'img/overlap.jpg',
    summary: 'Browser-only scheduling tool that OCRs course grids and computes shared availability.',
    tags: ['JavaScript', 'Tesseract.js', 'Supabase'],
    github: 'https://github.com/PrishaTHE-PRO/Overlap',
    demo: 'https://prishathe-pro.github.io/Overlap/',
  },
  {
    title: 'VitalLens',
    image: 'img/vitallens.jpg',
    summary: 'Turns lab reports into clear health insights, helping you understand biomarkers and track trends over time.',
    tags: ['React', 'TypeScript', 'Supabase', 'Recharts'],
    github: 'https://github.com/PrishaTHE-PRO/VitalLens',
  },
  {
    title: 'Link-Garden',
    image: 'img/link-garden.jpg',
    summary: 'An AI bookmark manager that organizes links into a visual garden and generates insights from browsing behavior.',
    tags: ['Next.js', 'Firebase', 'Gemini', 'OpenAI'],
    github: 'https://github.com/PrishaTHE-PRO/Link-Garden',
  },
  {
    title: 'LaunchPad',
    image: 'img/launchpad.jpg',
    summary: 'A startup discovery dashboard that tracks emerging startups and IPOs, tailors resumes to jobs, and generates project ideas.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/PrishaTHE-PRO/LaunchPad',
  },
  {
    title: 'LinkStash',
    image: 'photographs/IMG_4434.JPG',
    summary: 'A macOS menu bar app that lets you instantly save and categorize links without leaving what you are doing.',
    tags: ['Swift', 'SwiftUI', 'macOS'],
    github: 'https://github.com/PrishaTHE-PRO/LinkStash',
  },
];

const external = 'target="_blank" rel="noopener noreferrer"';

export function renderProjects(container) {
  if (!container) return;

  container.innerHTML = projects.map(({ title, image, summary, tags, github, demo }) => `
    <article class="card project-card">
      <img
        class="project-card__image"
        src="${asset(image)}"
        alt="${title} preview"
        loading="lazy"
        decoding="async"
      >
      <div class="card__body">
        <h3 class="card__title">${title}</h3>
        <p class="card__text">${summary}</p>
        <ul class="card__tags" aria-label="Built with">
          ${tags.map((tag) => `<li>${tag}</li>`).join('')}
        </ul>
        <div class="card__links">
          ${demo ? `<a href="${demo}" ${external}>Live site &rarr;</a>` : ''}
          <a href="${github}" ${external}>GitHub &rarr;</a>
        </div>
      </div>
    </article>`).join('');
}
