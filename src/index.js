import './style.css';
import {
  displayShows as DisplayShows,
  diplayComments as DisplayComments,
} from './modules/populate.js';

const render = async () => {
  await DisplayShows();
  await DisplayComments();
};

render();
