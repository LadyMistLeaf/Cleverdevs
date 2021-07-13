const DIALOG_BOX = document.getElementById("dialogBox");
const ANSWER_1 = document.getElementById("answer1");
const ANSWER_2 = document.getElementById("answer2");
const ANSWER_3 = document.getElementById("answer3");
const ANSWER_4 = document.getElementById("answer4");
const BUTTON_1 = document.getElementById("button1");
const BUTTON_2 = document.getElementById("button2");
const BUTTON_3 = document.getElementById("button3");
const BUTTON_4 = document.getElementById("button4");

const DIALOG_INFO = [
  {
    dialogue: [
      "Hey, newbie!  If you ever get stuck on a problem, just ask!  Always start with the <HTML> tag!",
      "Hi there!  I was so nervous when I first started that I was using something other than the forward slash (/) to close a tag!",
      "Hello!  Don't worry, it takes a while before you start to remember which tags are self-closing.  The HTML tag is not one of them!",
    ],
    question: "Which one of these opens and closes the HTML tag?",
    options: [
      {
        answer: "<html></html>",
        correct: true,
        response: "That is correct!  html need a closing tag!",
      },
      {
        answer: "<html />",
        correct: false,
        response:
          "No, html needs a seperate closing tag, it is not self-closing.",
      },
      {
        answer: "<html><html>",
        correct: false,
        response: "No, the closing tag is missing the forward slash.",
      },
      {
        answer: "<html><$html>",
        correct: false,
        response:
          "No, the dollar sign is not the character used to close a tag.",
      },
    ],
  },
  {
    dialogue: [
      "Hey, newbie!  If you ever get stuck on a problem, just ask!  Always start with the <HTML> tag!",
      "Hi there!  I was so nervous when I first started that I was using something other than the forward slash (/) to close a tag!",
      "Hello!  Don't worry, it takes a while before you start to remember which tags are self-closing.  The HTML tag is not one of them!",
    ],
    question: "Question2",
    options: [
      {
        answer: "<HTML></HTML>",
        correct: true,
        response: "That is correct!  HTML need a closing tag!",
      },
      {
        answer: "<HTML />",
        correct: false,
        response:
          "No, HTML needs a seperate closing tag, it is not self-closing.",
      },
      {
        answer: "<HTML><HTML>",
        correct: false,
        response: "No, the closing tag is missing the forward slash.",
      },
      {
        answer: "<HTML><$HTML>",
        correct: false,
        response:
          "No, the dollar sign is not the character used to close a tag.",
      },
    ],
  },
];

let spaceDown = false; // a check variable to see if the space key is down
let checkSpaceDown = false; // a check variable to see if we've looked for it already in the case of single actions

let quizSection = 0;
let innerSection = 0;
let status = "dialogue";
let answerCorrect = false;

updateDialogue = () => {
  DIALOG_BOX.innerHTML = DIALOG_INFO[quizSection].dialogue[innerSection];
  innerSection++;
};

startGame = () => {
  updateDialogue();
};

document.onload = startGame();

document.onkeypress = function (event) {
  if (event.key == " ") {
    spaceDown = true;
    spaceKeyDown();
  }
};

document.onkeyup = function (event) {
  if (event.key == " ") {
    spaceDown = false;
    checkSpaceDown = false;
  }
};

spaceKeyDown = () => {
  if (status == "dialogue" && !checkSpaceDown) {
    if (innerSection != 3) {
      updateDialogue();
      checkSpaceDown = true;
    } else {
      status = "quiz";
      startQuiz();
    }
  } else if (status == "quiz" && !answerCorrect) {
    DIALOG_BOX.innerText = DIALOG_INFO[quizSection].question;
  }
};

startQuiz = () => {
  DIALOG_BOX.innerText = DIALOG_INFO[quizSection].question;
  ANSWER_1.innerText = DIALOG_INFO[quizSection].options[0].answer;
  ANSWER_2.innerText = DIALOG_INFO[quizSection].options[1].answer;
  ANSWER_3.innerText = DIALOG_INFO[quizSection].options[2].answer;
  ANSWER_4.innerText = DIALOG_INFO[quizSection].options[3].answer;
  ANSWER_1.classList.toggle("inactive");
  ANSWER_2.classList.toggle("inactive");
  ANSWER_3.classList.toggle("inactive");
  ANSWER_4.classList.toggle("inactive");
  BUTTON_1.addEventListener("click", function () {
    checkAnswer(0);
  });
  BUTTON_2.addEventListener("click", function () {
    checkAnswer(1);
  });
  BUTTON_3.addEventListener("click", function () {
    checkAnswer(2);
  });
  BUTTON_4.addEventListener("click", function () {
    checkAnswer(3);
  });
};

checkAnswer = (answer) => {
  if (DIALOG_INFO[quizSection].options[answer].correct) {
    answerCorrect = true;
    DIALOG_BOX.innerText = DIALOG_INFO[quizSection].options[answer].response;
    quizSection++;
    innerSection = 0;
    status = "dialogue";
  } else {
    DIALOG_BOX.innerText = DIALOG_INFO[quizSection].options[answer].response;
  }
};
