import { TVMAZE_BASE_URL } from './url_config.js';
import renderPopUp from './comment_pop_up.js';

const generate = async () => {
  const requestURL = TVMAZE_BASE_URL;
  const request = new Request(requestURL);

  const response = await fetch(request);
  const result = await response.json();

  return result;
};

const displayShows = async () => {
  const data = await generate();

  const container = document.querySelector('.container');

  data.forEach((show) => {
    const showCard = `
      <div id=${show.id} class="showCard">
      <img src=${show.image.medium} alt="TVshow thumbnail"/>
      <div class="title">
      <h2>${show.name}</h2>
      <i class="fa-regular fa-heart"></i>
      </div>
      <button class="comment">Comments</button>
      </div>
      `;

    container.innerHTML += showCard;
  });
};

const diplayComments = async () => {
  await generate();

  const commentButtons = document.querySelectorAll('.comment');

  commentButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const currentShow = e.path[1];
      const id = currentShow.getAttribute('id');
      renderPopUp(id);
    });
  });
};

export { displayShows, diplayComments };
