import { TVMAZE_BASE_URL } from './url_config.js';

const getTvShowInfo = async (id) => {
  const response = await fetch(`${TVMAZE_BASE_URL}/${id}`);
  const data = await response.json();
  return data;
};

const constructTvShowInfoDOM = (tvShow) => {
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
                    <h3 class="comments-head">Comments (<span class="num-comment"></span>) </h3>
                </div>
                <div class="comment-list"></div>
            </div>
            <h3>Add a comment</h3>
            <form class="comment-form" action="" method="post">
                <input class="name-area" type="text" name="name" id="name">
                <textarea class="comment-area" type="text" name="comment" id="comment" required></textarea>
                <input class="sub-button" type="submit" value="Comment">
            </form>
        </div>`;

  popUpCtn.innerHTML += showInfoDiv;
  const sd = popUpCtn.querySelector('.ctn-icn');
  sd.addEventListener('click', () => {
    popUpCtn.classList.remove('show');
  });
};

const renderPopUp = (id) => {
  getTvShowInfo(id).then((tvShow) => constructTvShowInfoDOM(tvShow));
};

// const createComment = (id) => {
// send the comment to the server
// };

export default renderPopUp;
