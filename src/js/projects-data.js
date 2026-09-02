import { asset } from './asset';
export const projects = [
  {
    title: 'Overlap',
    summary: 'Browser-only scheduling tool that OCRs course grids and computes shared availability.',
    image: 'img/overlap.png',
    github: 'https://github.com/PrishaTHE-PRO/Overlap',
    demo: 'https://prishathe-pro.github.io/Overlap/',
  },
  {
    title: 'VitalLens',
    summary: 'Turns lab reports into clear health insights, helping you understand biomarkers and track trends over time.',
    image: 'img/vitallens.png',
    github: 'https://github.com/PrishaTHE-PRO/VitalLens',
  },
  {
    title: 'Clarity',
    summary: 'Chrome extension that highlights the most important sentences on any page, powered by a random forest model.',
    image: 'img/IMG_1592.JPG',
    github: 'https://github.com/PrishaTHE-PRO/Clarity',
  },
  {
    title: 'Link-Garden',
    summary: 'An AI bookmark manager that organizes links into a visual garden and generates insights from browsing behavior.',
    image: 'img/link-garden.png',
    github: 'https://github.com/PrishaTHE-PRO/Link-Garden',
  },
  {
    title: 'LinkStash',
    summary: 'A macOS menu bar app that lets you instantly save and categorize links without leaving what you are doing.',
    image: 'img/IMG_4434.JPG',
    github: 'https://github.com/PrishaTHE-PRO/LinkStash',
  },
  {
    title: 'BluPrint',
    summary: 'An AI-powered interior design platform that transforms room dimensions and inspiration images into personalized 2D layouts with style-matched furniture recommendations.',
    image: 'img/bluprint.png',
    github: 'https://github.com/PrishaTHE-PRO/BluPrint',
  },
  {
    title: 'LaunchPad',
    summary: 'A startup discovery dashboard that tracks emerging startups and IPOs, tailors resumes to jobs, and generates project ideas.',
    image: 'img/launchpad.png',
    github: 'https://github.com/PrishaTHE-PRO/LaunchPad',
  },
];

export function renderProjects(container) {
  if (!container) return;

  container.innerHTML = projects.map(({ title, summary, image, github, demo }) => `
    <article class="about-projects__item">
      <div class="about-projects__media">
        <img
          class="about-projects__image"
          src="${asset(image)}"
          alt="${title} preview"
          loading="lazy"
        >
        <div class="about-projects__links">
          <a
            class="about-projects__github"
            href="${github}"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub →</a>
          ${demo ? `<a
            class="about-projects__github"
            href="${demo}"
            target="_blank"
            rel="noopener noreferrer"
          >Live →</a>` : ''}
        </div>
      </div>
      <div class="about-projects__meta">
        <h3 class="about-projects__title">${title}</h3>
        <p class="about-projects__summary">${summary}</p>
      </div>
   </article>
  `).join('');
}
