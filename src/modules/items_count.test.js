import showHomeCounter from './__mocks__/items.js';

test('all items count should equal to 4', () => {
  showHomeCounter();

  expect(showHomeCounter().length).toBe(4);
});
