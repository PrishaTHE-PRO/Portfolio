import '../styles/about.scss';
import '../styles/hint.scss';
import { initPageTransitions, playEnterTransition } from './transitions';
import { initProximityGrid } from './proximity-grid';
import { renderTools } from './tools-data';
import { renderProjects } from './projects-data';
import { renderExperience } from './experience-data';
import { initExperienceTimeline } from './experience-timeline';

initPageTransitions();
playEnterTransition();

const experienceEl = document.getElementById('experienceTimeline');
renderExperience(experienceEl);
initExperienceTimeline(experienceEl);

renderProjects(document.getElementById('projectsList'));

const stage = document.getElementById('proximityStage');
renderTools(stage);
initProximityGrid(stage);
