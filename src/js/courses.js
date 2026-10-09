import '../styles/subpage.scss';
import { initPageTransitions, playEnterTransition } from './transitions';
import { renderCourses } from './courses-data';

initPageTransitions();
playEnterTransition();

renderCourses(document.getElementById('courseList'));
