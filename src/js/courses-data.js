// Coursework, grouped by school. Add a group or a course and the Courses page
// picks it up; `code` is optional.
export const courses = [
  {
    school: 'University of Wisconsin–Madison',
    items: [
      // { code: 'COMP SCI 400', name: 'Programming III' },
    ],
  },
];

export function renderCourses(container) {
  if (!container) return;

  const groups = courses.filter((group) => group.items.length);
  if (!groups.length) {
    container.innerHTML = '<p class="course-empty">Course list coming soon.</p>';
    return;
  }

  container.innerHTML = groups.map(({ school, items }) => `
    <section class="card course-group">
      <h3 class="card__title">${school}</h3>
      <ul class="course-list">
        ${items.map(({ code, name }) => `
          <li>
            <span class="course-list__code">${code || '&mdash;'}</span>
            <span class="course-list__name">${name}</span>
          </li>`).join('')}
      </ul>
    </section>`).join('');
}
