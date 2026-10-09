import '../styles/subpage.scss';
import { initPageTransitions, playEnterTransition } from './transitions';
import { renderAwards } from './involvement';

initPageTransitions();
playEnterTransition();

renderAwards(document.getElementById('awardsList'));
