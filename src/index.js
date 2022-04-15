import './style.css';
import {
  displayShows as DisplayShows,
  diplayComments as DisplayComments,
  displayLikes,
} from './modules/populate.js';

const render = async () => {
  await DisplayShows();
  displayLikes();
  await DisplayComments();
};

render();
