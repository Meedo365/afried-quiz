import {
    checkQuestion,
    answerButtonClickHandler,
    countdown,
    countdownCompleted
  } from './quiz';
  
  document.getElementById("opt1").addEventListener("click", () => {
    answerButtonClickHandler(questions[currentIndex].options[0]);
  });
  
  document.getElementById("opt2").addEventListener("click", () => {
    answerButtonClickHandler(questions[currentIndex].options[1]);
  });
  
  document.getElementById("opt3").addEventListener("click", () => {
    answerButtonClickHandler(questions[currentIndex].options[2]);
  });
  
  document.getElementById("opt4").addEventListener("click", () => {
    answerButtonClickHandler(questions[currentIndex].options[3]);
  });
  
  checkQuestion(currentIndex);
  countdown(10);
  