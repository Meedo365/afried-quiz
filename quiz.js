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

    countdown(10);
    checkQuestion(currentIndex);
  }, 500);
};

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
  countdown(10);
};

export {
  checkQuestion,
  answerButtonClickHandler,
  countdown,
  countdownCompleted
};
