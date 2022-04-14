import { TVMAZE_BASE_URL } from './url_config';

export default async function getTvShowInfo(id) {
  const response = await fetch(`${TVMAZE_BASE_URL}/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
}

const constructTvShowInfoDOM = (tvShow) => {
  const popUpCtn = document.createElement('div');
  popUpCtn.classList.add('ctn-tv-info-window');
  popUpCtn.innerHTML = `
    <div class="ctn-tv-info-window">
        <div class="ctn-tv-info">
            <div class="ctn-img">
                <img src="${tvShow.image.medium}" alt="tvshow_preview">
            </div>
            <h3 class="tvshow-name"></h3>
            <div class="tvshow_info">
                <h5>Type : <span></span></h5>
                <h5>Languages : <span></span></h5>
                <h5>Duration : <span></span></h5>
                <h5>Genre : <span></span></h5>
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
        </div>
    </div>`;
};

const renderPopUp = (id) => {
  constructTvShowInfoDOM(getTvShowInfo(id));
};

const createComment = (id) => {
  // send the comment to the server
};
