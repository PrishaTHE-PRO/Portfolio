// Coursework at UW–Madison, grouped by subject. Add a group or a course and
// the Courses page picks it up; `note` marks a course that is in progress.
export const courses = [
  {
    title: 'Computer Science',
    items: [
      { code: 'COMP SCI 200', name: 'Programming I' },
      { code: 'COMP SCI 240', name: 'Introduction to Discrete Mathematics' },
      { code: 'COMP SCI 252', name: 'Introduction to Computer Engineering' },
      { code: 'COMP SCI 300', name: 'Programming II' },
      { code: 'COMP SCI 320', name: 'Data Science Programming II', note: 'Fall 2026' },
      { code: 'COMP SCI 354', name: 'Machine Organization and Programming', note: 'Fall 2026' },
      { code: 'COMP SCI 368', name: 'Learn a Programming Language: Python for Java Programmers', note: 'Fall 2026' },
      { code: 'COMP SCI 400', name: 'Programming III' },
      { code: 'COMP SCI 571', name: 'Building User Interfaces', note: 'Fall 2026' },
    ],
  },
  {
    title: 'Mathematics',
    items: [
      { code: 'MATH 340', name: 'Elementary Matrix and Linear Algebra' },
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

  container.innerHTML = groups.map(({ title, items }) => `
    <section class="card course-group">
      <h3 class="card__title">${title}</h3>
      <ul class="course-list">
        ${items.map(({ code, name, note }) => `
          <li>
            <span class="course-list__code">${code || '&mdash;'}</span>
            <span class="course-list__name">${name}${note ? ` <span class="course-list__note">${note}</span>` : ''}</span>
          </li>`).join('')}
      </ul>
    </section>`).join('');
}
