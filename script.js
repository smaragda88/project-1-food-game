const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const cnvWidth = canvas.width;
const cnvHeight = canvas.height;

const game = new Game();

const startElement = document.getElementById('trigger-game');
const replayElement = document.getElementById('trigger-replay');

const startingSection = document.getElementById('start');
const gameOverSection = document.getElementById('game-over');
const gamingScreen = document.getElementById('game-screen');
const scoreElement = document.querySelector('.score-parent');

startElement.addEventListener('click', () => {
  gamingScreen.style.display = 'block';
  startingSection.style.display = 'none';
  startElement.style.display = 'none';
  scoreElement.style.display = 'block';
  game.loop();
});

replayElement.addEventListener('click', () => {
  gameOverSection.style.display = 'none';
  gamingScreen.style.display = 'block';
  scoreElement.style.display = 'block';
  game.condition = true;
  game.resetGame();
  game.loop();
});
