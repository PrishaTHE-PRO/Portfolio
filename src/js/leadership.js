import '../styles/subpage.scss';
import { initPageTransitions, playEnterTransition } from './transitions';
import { renderLeadership } from './involvement';

initPageTransitions();
playEnterTransition();

renderLeadership(document.getElementById('leadershipList'));
