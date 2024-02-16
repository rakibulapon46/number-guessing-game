const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempt = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);

  if (guess < minNum) {
    window.alert(`Please enter a valid number`);
  } else if (guess > maxNum) {
    window.alert(`Please enter a valid number`);
  } else {
    attempt++;
    if (guess < answer) {
      window.alert(`TOO LOW! TRY AGAIN`);
    } else if (guess > answer) {
      window.alert(`TOO HIGH! TRY AGAIN`);
    } else {
      window.alert(
        `CORRECT! The answer was ${answer}. It took you ${attempt} attempts.`
      );
      running = false;
    }
  }
}

//! title part
let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back ☹️";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});