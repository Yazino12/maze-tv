import { TVMAZE_BASE_URL, CAP_BASE_URL, APP_KEY } from './url_config.js';

const getTvShowInfo = async (id) => {
  const response = await fetch(`${TVMAZE_BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

const getComments = async (id) => {
  const response = await fetch(
    `${CAP_BASE_URL}/${APP_KEY}/comments?item_id=${id}`,
  );
  const data = await response.json();
  return data;
};

const displayComments = (comments, container) => {
  if (comments.length > 0) {
    comments.forEach((comment) => {
      container.innerHTML += `
      <h5>${comment.creation_date} &nbsp; &nbsp; ${comment.username} &nbsp; :  &nbsp; ${comment.comment}</h5>`;
    });
  }
};

const createComment = async (id, userName, message) => {
  const userPost = {
    item_id: id,
    username: userName,
    comment: message,
  };
  const response = await fetch(`${CAP_BASE_URL}/${APP_KEY}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userPost),
  });
  const data = await response.json();
  return data;
};

const constructTvShowInfoDOM = (tvShow, comments) => {
  const popUpCtn = document.getElementById('ctn-tv-info-window');
  popUpCtn.classList.add('show');
  popUpCtn.innerHTML = '';
  const showInfoDiv = `
        <div class="ctn-tv-info">
            <div class="ctn-icn">
            <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="ctn-img">
                <img src="${tvShow.image.medium}" alt="tvshow_preview">
            </div>
            <h3 class="tvshow-name">${tvShow.name}</h3>
            <div class="tvshow_info">
                <h5>Type : <span>${tvShow.type}</span></h5>
                <h5>Languages : <span>${tvShow.language}</span></h5>
                <h5>Duration : <span>${tvShow.runtime}</span></h5>
                <h5>Genre : <span>${tvShow.genres}</span></h5>
            </div>
            <div class="ctn-comment">
                <div class="ctn-comments-head">
                    <h3 class="comments-head">Comments (<span class="num-comment">${comments.length}</span>) </h3>
                </div>
                <div class="comment-list"></div>
            </div>
            <h3>Add a comment</h3>
            <form class="comment-form" action="${CAP_BASE_URL}/${APP_KEY}/comments" method="post">
                <input class="name-area" type="text" name="name" id="name" required>
                <textarea class="comment-area" type="text" name="comment" id="comment" required></textarea>
                <input class="sub-button" type="submit" name="Comment">
            </form>
        </div>`;

  popUpCtn.innerHTML += showInfoDiv;

  const sd = popUpCtn.querySelector('.ctn-icn');
  const commentList = popUpCtn.querySelector('.comment-list');

  const nameField = popUpCtn.querySelector('.name-area');
  const commentField = popUpCtn.querySelector('.comment-area');
  const submitButton = popUpCtn.querySelector('form');

  submitButton.addEventListener('submit', (e) => {
    e.preventDefault();
    createComment(tvShow.id, nameField.value, commentField.value);
    nameField.value = '';
    commentField.value = '';
  });

  displayComments(comments, commentList);

  sd.addEventListener('click', () => {
    popUpCtn.classList.remove('show');
  });
};

const renderPopUp = (id) => {
  Promise.all([getTvShowInfo(id), getComments(id)]).then((message) => {
    if (!Array.isArray(message[1])) {
      constructTvShowInfoDOM(message[0], []);
    } else {
      constructTvShowInfoDOM(message[0], message[1]);
    }
  });
};

export default renderPopUp;
