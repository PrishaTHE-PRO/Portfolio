export const experience = [
  {
    date: 'Jan 2026 — Present',
    role: 'AI/Technical Builder',
    org: 'UW-Madison Tech Exploration Lab',
    description: 'Lifted veterinary keyterm recognition from 62% to 81% on a bilingual EN-ES voice agent built in Go with Deepgram ASR and ElevenLabs TTS across 7 partner farms.',
  },
  {
    date: 'May 2026 — Present',
    role: 'Tech Fellow',
    org: 'CodePath',
    description: 'Mentored 300+ students through weekly technical interview prep, raising average HackerRank scores from 40% to 70% over 10 weeks.',
  },
  {
    date: 'May 2024 — Aug 2024',
    role: 'Software Developer Intern',
    org: 'University of Nebraska-Omaha',
    description: 'Built diamond-square terrain generation in Unity for a 16x16 rover map, and led GitHub integration across 10 sprints and 3+ contributors.',
  },
];

export function renderExperience(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="about-experience__line" aria-hidden="true"></div>
    ${experience.map((entry) => `
      <article class="about-experience__item">
        <div class="about-experience__marker" aria-hidden="true">
          <span class="about-experience__dot"></span>
        </div>
        <div class="about-experience__content">
          <time class="about-experience__date">${entry.date}</time>
          <h3 class="about-experience__role">${entry.role}</h3>
          <p class="about-experience__org">${entry.org}</p>
          <p class="about-experience__desc">${entry.description}</p>
        </div>
      </article>
    `).join('')}
  `;
}
