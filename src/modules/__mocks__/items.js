const showHomeCounter = () => {
  const homeCounter = document.querySelector('.home-counter');
  const container = document.querySelector('.container');
  homeCounter.textContent = container.children.length;
};

export default showHomeCounter;
