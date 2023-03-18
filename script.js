// ` icon //
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector('.highscore').textContent;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔';
  } // when player win the game
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '45rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High 📈' : 'Too Low 📉';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } // when player lose the game
    else {
      document.querySelector('.message').textContent = 'You lost the game 💥';
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#7a7777';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
