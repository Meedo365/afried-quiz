// let question = document.getElementById("question");
// let opt1 = document.getElementById("opt1");
// let opt2 = document.getElementById("opt2");
// let opt3 = document.getElementById("opt3");
// let opt4 = document.getElementById("opt4");
// let feed = document.getElementById("feedback");
// let score = 0;
// let currentIndex = 0;

// let countdown = (time) => {
//   const timerElement = document.getElementById("timer");
//   if (time >= 0) {
//     timerElement.innerHTML = `${time}s`;
//     setTimeout(() => {
//       countdown(time - 1);
//     }, 1000);
//   } else if (time === 0) {
//     alert("Please")
//     let newTime = currentIndex + 1;
//     checkQuestion(newTime);
//     countdown(5);
//   }
// };

// countdown(5);

// function Quiz(questions) {
//   this.questions = questions;
//   this.currentIndex = 0;
// }

// Quiz.prototype.getCurrentQuestion = function () {
//   return this.questions[this.currentIndex];
// };

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["Paris", "London", "Berlin", "Madrid"],
//     answer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Venus", "Mars", "Jupiter", "Neptune"],
//     answer: "Mars",
//   },
//   {
//     question: "Which Former British Colony Was Given Back To China In 1997?",
//     options: ["Russia", "Nigeria", "America", "Hong Kong"],
//     answer: "Hong Kong",
//   },
// ];

// const myQuiz = new Quiz(questions);

// const checkQuestion = (e) => {
//   console.log(e);
//   question.innerHTML = myQuiz.questions[e].question;
//   opt1.innerHTML = myQuiz.questions[e].options[0];
//   opt2.innerHTML = myQuiz.questions[e].options[1];
//   opt3.innerHTML = myQuiz.questions[e].options[2];
//   opt4.innerHTML = myQuiz.questions[e].options[3];
// };

// checkQuestion(currentIndex);

// let correctAnswer = myQuiz.questions[currentIndex].answer;
// let providedAnswer = "";

// opt1.addEventListener("click", function () {
//   providedAnswer = opt1.innerHTML;
//   checkAnswer();
//   setInterval(() => {
//     countdown(5);
//     currentIndex++;
//   }, 500);
// });

// opt2.addEventListener("click", function () {
//   providedAnswer = opt2.innerHTML;
//   checkAnswer();
//   setInterval(() => {
//     countdown(5);
//     currentIndex++;
//   }, 500);
// });

// opt3.addEventListener("click", function () {
//   providedAnswer = opt3.innerHTML;
//   checkAnswer();
//   setInterval(() => {
//     countdown(5);
//     currentIndex++;
//   }, 500);
// });

// opt4.addEventListener("click", function () {
//   providedAnswer = opt4.innerHTML;
//   checkAnswer();
//   setInterval(() => {
//     countdown(5);
//     currentIndex++;
//   }, 500);
// });

// let checkAnswer = () => {
//   if (providedAnswer === correctAnswer) {
//     score++;
//     feed.innerHTML = "correct";
//     feed.style.color = "green";
//   } else {
//     feed.innerHTML = "incorrect";
//     feed.style.color = "red";
//   }
// };

let score = 0;
let currentIndex = 0;
let correctAnswer = "";
let providedAnswer = "";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Neptune"],
    answer: "Mars",
  },
  {
    question: "Which Former British Colony Was Given Back To China In 1997?",
    options: ["Russia", "Nigeria", "America", "Hong Kong"],
    answer: "Hong Kong",
  },
];

const checkQuestion = (index) => {
  if (index >= 0 && index < questions.length) {
    let question = questions[index];
    document.getElementById("question").textContent = question.question;
    document.getElementById("opt1").textContent = question.options[0];
    document.getElementById("opt2").textContent = question.options[1];
    document.getElementById("opt3").textContent = question.options[2];
    document.getElementById("opt4").textContent = question.options[3];
    document.getElementById("qstNo").textContent = `Question: ${index + 1}/${
      questions.length
    }`;
    correctAnswer = question.answer;
  } else if (index >= 0 && index > questions.length) {
    document.getElementById("content").style.display = `none`;
    document.getElementById("result").style.display = `flex`;
    document.getElementById("result").textContent = `Score: ${score}`;
  }
};

const checkAnswer = () => {
  if (providedAnswer === correctAnswer) {
    score++;
    document.getElementById("feedback").textContent = "Correct";
    document.getElementById("feedback").style.color = "green";
  } else {
    document.getElementById("feedback").textContent = "Incorrect";
    document.getElementById("feedback").style.color = "red";
  }
};

const answerButtonClickHandler = (selectedOption) => {
  providedAnswer = selectedOption;
  checkAnswer();
  currentIndex++;
  setTimeout(() => {
    document.getElementById("feedback").textContent = "";
    document.getElementById("feedback").style.color = "";

    countdown(5);
    checkQuestion(currentIndex);
  }, 500);
};

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

const countdown = (time) => {
  const timerElement = document.getElementById("timer");
  if (time >= 0) {
    timerElement.innerHTML = `${time}s`;
    setTimeout(() => {
      countdown(time - 1);
    }, 1000);
  } else {
    countdownCompleted();
  }
};

const countdownCompleted = () => {
  currentIndex++;
  checkQuestion(currentIndex);
  countdown(5);
};

checkQuestion(currentIndex);
countdown(5);
