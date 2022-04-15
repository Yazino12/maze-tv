import { createComment, getComments } from './__mocks__/comment.js';

test('add two comments to have a total count of two', () => {
  const comment1 = {
    creation_date: '2020-01-01',
    username: 'user1',
    comment: 'comment1',
  };
  const comment2 = {
    creation_date: '2020-01-01',
    username: 'user2',
    comment: 'comment2',
  };

  createComment(1, comment1.username, comment1.comment);
  createComment(1, comment2.username, comment2.comment);

  expect(getComments(1).length).toBe(2);
});
