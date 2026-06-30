import '../styles/about.scss';
import '../styles/hint.scss';
import { initPageTransitions, playEnterTransition } from './transitions';
import { initProximityGrid } from './proximity-grid';

initPageTransitions();
playEnterTransition();
initProximityGrid(document.getElementById('proximityStage'));
