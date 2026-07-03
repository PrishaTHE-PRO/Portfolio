import '../styles/about.scss';
import '../styles/hint.scss';
import { initPageTransitions, playEnterTransition } from './transitions';
import { initProximityGrid } from './proximity-grid';
import { renderTools } from './tools-data';

initPageTransitions();
playEnterTransition();

const stage = document.getElementById('proximityStage');
renderTools(stage);
initProximityGrid(stage);
