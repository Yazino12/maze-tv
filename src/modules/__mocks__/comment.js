const commentData = [];

export const getComments = (id) => commentData.filter((comment) => comment.item_id === id);

export const createComment = (id, userName, message) => {
  const comment = {
    item_id: id,
    username: userName,
    comment: message,
  };
  commentData.push(comment);
};
