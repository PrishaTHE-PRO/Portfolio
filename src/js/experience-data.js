export const experience = [
  {
    date: '2025 — Present',
    role: 'Software Engineering Intern',
    org: 'Nova Labs',
    description: 'Building React dashboards and Supabase-backed APIs for an internal analytics platform.',
  },
  {
    date: '2024',
    role: 'Frontend Developer',
    org: 'Campus Connect',
    description: 'Led UI for a student events app — shipped real-time RSVP flows and push notification hooks.',
  },
  {
    date: '2023 — 2024',
    role: 'ML Research Assistant',
    org: 'University Lab',
    description: 'Experimented with PyTorch models for audio classification. Published a workshop poster.',
  },
  {
    date: '2023',
    role: 'Photography Lead',
    org: 'Student Creative Collective',
    description: 'Directed shoots, edited in Lightroom, and managed a team of 8 for campus campaigns.',
  },
  {
    date: '2022',
    role: 'Founder',
    org: 'Side Project Studio',
    description: 'Shipped small web apps and iOS prototypes. Learned Swift, Firebase, and how to talk to users.',
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
