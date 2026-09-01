import { asset } from './asset';
export const toolCategories = [
  {
    title: 'Languages',
    tools: [
      { name: 'Swift', icon: 'swift.svg' },
      { name: 'Python', icon: 'python.svg' },
      { name: 'CSS', icon: 'css.svg' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    tools: [
      { name: 'React', icon: 'react.svg' },
      { name: 'Node.js', icon: 'nodedotjs.svg' },
      { name: 'PyTorch', icon: 'pytorch.svg' },
      { name: 'NumPy', icon: 'numpy.svg' },
      { name: 'scikit-learn', icon: 'scikitlearn.svg' },
    ],
  },
  {
    title: 'Databases',
    tools: [
      { name: 'Supabase', icon: 'supabase.svg' },
      { name: 'MongoDB', icon: 'mongodb.svg' },
      { name: 'Firebase', icon: 'firebase.svg' },
    ],
  },
  {
    title: 'Tools & DevOps',
    tools: [
      { name: 'Docker', icon: 'docker.svg' },
      { name: 'Git', icon: 'git.svg' },
      { name: 'Xcode', icon: 'xcode.svg' },
      { name: 'Warp', icon: 'warp.svg' },
      { name: 'Figma', icon: 'figma.svg' },
    ],
  },
  {
    title: 'AI & APIs',
    tools: [
      { name: 'Claude', icon: 'claude.svg' },
      { name: 'Gemini', icon: 'googlegemini.svg' },
      { name: 'Deepgram', icon: 'deepgram.svg' },
      { name: 'ElevenLabs', icon: 'elevenlabs.svg' },
      { name: 'Kaggle', icon: 'kaggle.svg' },
    ],
  },
];

function renderCard({ name, icon }) {
  return `
    <div class="about-tool__card">
      <div class="about-tool__card-icon">
        <img src="${asset(`img/${icon}`)}" alt="${name}" loading="lazy">
      </div>
      <span class="about-tool__card-title">${name}</span>
    </div>
  `;
}

export function renderTools(stage) {
  if (!stage) return;

  const categories = toolCategories.map(({ title, tools }) => `
    <div class="about-tool__category">
      <h3 class="about-tool__category-title">${title}</h3>
      <div class="about-tool__grid">
        ${tools.map(renderCard).join('')}
      </div>
    </div>
  `).join('');

  stage.innerHTML = `
    ${categories}
    <span class="about-tool__stage-label">move cursor over grid</span>
  `;
}
