import { leadership, awards } from './involvement-data';

export function initInvolvement(railEl, detailEl, awardsEl) {
  if (!railEl || !detailEl) return;

  railEl.innerHTML = leadership.map((item, i) => `
    <button type="button" class="lanyard" data-index="${i}" aria-expanded="false">
      <span class="lanyard__strap" aria-hidden="true"></span>
      <span class="lanyard__badge">
        <span class="lanyard__punch" aria-hidden="true"></span>
        <span class="lanyard__org">${item.org}</span>
        <span class="lanyard__role">${item.role}</span>
        ${item.year ? `<span class="lanyard__year">${item.year}</span>` : ''}
      </span>
    </button>`).join('');

  if (awardsEl) {
    awardsEl.innerHTML = awards.map((a) => `
      <li class="about-awards__item">
        <span class="about-awards__name">${a.name}</span>
        ${a.note ? `<span class="about-awards__note">${a.note}</span>` : ''}
        <span class="about-awards__year">${a.year || ''}</span>
      </li>`).join('');
  }

  const buttons = [...railEl.querySelectorAll('.lanyard')];
  let open = -1;

  function show(index) {
    // Clicking the open badge closes it again.
    open = index === open ? -1 : index;

    buttons.forEach((b, i) => {
      b.classList.toggle('is-open', i === open);
      b.setAttribute('aria-expanded', String(i === open));
    });
    railEl.classList.toggle('has-open', open !== -1);

    if (open === -1) {
      detailEl.hidden = true;
      detailEl.innerHTML = '';
      return;
    }

    const item = leadership[open];
    detailEl.innerHTML = `
      <p class="about-involve__detail-role">${item.role}${item.year ? ` &middot; ${item.year}` : ''}</p>
      <p class="about-involve__detail-org">${item.org}</p>
      <p class="about-involve__detail-text">${item.detail}</p>`;
    detailEl.hidden = false;
  }

  railEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.lanyard');
    if (btn) show(Number(btn.dataset.index));
  });
}
