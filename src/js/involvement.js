import { leadership, awards } from './involvement-data';

export function renderLeadership(container) {
  if (!container) return;

  container.innerHTML = leadership.map(({ org, role, year, detail }) => `
    <article class="card leader-card">
      <p class="card__eyebrow">${org}${year ? `<span>${year}</span>` : ''}</p>
      <h3 class="card__title">${role}</h3>
      <p class="card__text">${detail}</p>
    </article>`).join('');
}

export function renderAwards(container) {
  if (!container) return;

  container.innerHTML = awards.map(({ name, note, year }) => `
    <article class="card award-card">
      <p class="card__eyebrow">${note || 'Award'}${year ? `<span>${year}</span>` : ''}</p>
      <h3 class="card__title">${name}</h3>
    </article>`).join('');
}
