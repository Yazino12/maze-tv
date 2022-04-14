import './style.css';
import {
  displayShows as DisplayShows,
  diplayComments as DisplayComments,
} from './modules/populate.js';

const render = () => {
  DisplayShows();
  DisplayComments();
};

render();