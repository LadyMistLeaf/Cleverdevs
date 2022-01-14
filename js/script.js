const DIALOG_BOX = document.getElementById("dialogBox");
const ANSWER_1 = document.getElementById("answer1");
const ANSWER_2 = document.getElementById("answer2");
const ANSWER_3 = document.getElementById("answer3");
const ANSWER_4 = document.getElementById("answer4");
const BUTTON_1 = document.getElementById("button1");
const BUTTON_2 = document.getElementById("button2");
const BUTTON_3 = document.getElementById("button3");
const BUTTON_4 = document.getElementById("button4");
const BUTTON_NEXT = document.getElementById("buttonnext");
const SCORE = document.getElementById("score");

const DIALOG_INFO = [
  {
    dialogue: [],
    question: "What symbol indicates that a tag is a closing tag?",
    options: [
      {
        answer: "/",
        correct: true,
        response: "That is correct!  The symbol for a closing tag is indeed /",
      },
      {
        answer: "}",
        correct: false,
        response:
          "No, the closing bracket does not close a tag.",
      },
      {
        answer: "*",
        correct: false,
        response: "No, the star does not close a tag.",
      },
      {
        answer: "<",
        correct: false,
        response:
          "No, the bigger than and less than symbols specify the tag itself.",
      },
    ],
  },
  {
    dialogue: [],
    question: "Which of the following is an opening tag for a list that is made up of bullet points?",
    options: [
      {
        answer: "<ol>",
        correct: false,
        response: "No, the ol tag creates an ordered, numbered list.",
      },
      {
        answer: "<li>",
        correct: false,
        response:
          "No, the li tag creates a single item within a list, not the list itself.",
      },
      {
        answer: "<ul>",
        correct: true,
        response: "That is correct!  This creates an unordered list with bullet points!",
      },
      {
        answer: "<list>",
        correct: false,
        response:
          "No, list is not a valid HTML tag.",
      },
    ],
  },
  {
    dialogue: [],
    question: "What is the formal term for placing something inside of something else?",
    options: [
      {
        answer: "Spacing",
        correct: false,
        response: "That is incorrect.",
      },
      {
        answer: "Nesting",
        correct: true,
        response:
          "That is correct!  Nesting is adding items inside of other items.",
      },
      {
        answer: "Indenting",
        correct: false,
        response: "No, indenting is adding space before the code to indicate what the code is contained in.",
      },
      {
        answer: "Organizing",
        correct: false,
        response:
          "That is incorrect.",
      },
    ],
  },
  {
    dialogue: [],
    question: 'What tag puts "Learn to code" at the top of the browser tab?',
    options: [
      {
        answer: "<title>",
        correct: true,
        response: "That is correct!  The title adds the browser tab name.",
      },
      {
        answer: "<head>",
        correct: false,
        response:
          "No, the header adds web page information and data.",
      },
      {
        answer: "<body>",
        correct: false,
        response: "No, body contains the page display information.",
      },
      {
        answer: "<html>",
        correct: false,
        response:
          "No, the html tag encompasses the entire document.",
      },
    ],
  },
  {
    dialogue: [],
    question: "What is the function of this tag?: <a>",
    options: [
      {
        answer: "Makes text larger",
        correct: false,
        response: "That is incorrect.",
      },
      {
        answer: "Makes a horizontal line",
        correct: false,
        response:
          "No, the <br /> tag creates a horizontal line.",
      },
      {
        answer: "Underlines a word",
        correct: false,
        response: "That is incorrect.",
      },
      {
        answer: "Creates a link",
        correct: true,
        response:
          "That is correct!  The <a> tag creates a link!",
      },
    ],
  },
  {
    dialogue: [],
    question: "Which of the following is NOT an attribute?",
    options: [
      {
        answer: "href",
        correct: false,
        response: "No, this is a valid attribute.",
      },
      {
        answer: "src",
        correct: false,
        response:
          "No, this is a valid attribute.",
      },
      {
        answer: "class",
        correct: false,
        response: "No, this is a valid attribute.",
      },
      {
        answer: "p",
        correct: true,
        response:
          "This is correct!  p is a tag, not an attribute.",
      },
    ],
  },
  {
    dialogue: [],
    question: "To change the background of your HTML document, which tag should be modified?",
    options: [
      {
        answer: "<html>",
        correct: false,
        response: "This is incorrect.",
      },
      {
        answer: "<body>",
        correct: true,
        response:
          "This is correct!  The body affects the entire document.",
      },
      {
        answer: "<head>",
        correct: false,
        response: "This is incorrect, the head indicates document information, not document layout.",
      },
      {
        answer: "<p>",
        correct: false,
        response:
          "This is incorrect, the p tag affects the indicated paragraph only.",
      },
    ],
  },
  {
    dialogue: [],
    question: "Which of these is a self-closing tag? (empty tag)",
    options: [
      {
        answer: "<link>",
        correct: true,
        response: "That is correct!  The link tag is self-closing!",
      },
      {
        answer: "<a>",
        correct: false,
        response:
          "No, the a tag needs a closing tag.",
      },
      {
        answer: "<p>",
        correct: false,
        response: "No, a p tag needs a closing tag.",
      },
      {
        answer: "<h1>",
        correct: false,
        response:
          "No, the h1 tag needs a closing tag.",
      },
    ],
  },
  {
    dialogue: [],
    question: "The HTML tag contains: ",
    options: [
      {
        answer: "sections of the page",
        correct: false,
        response: "No, it contains more than the sections of the page",
      },
      {
        answer: "presentation of the web page",
        correct: false,
        response:
          "No, HTML needs a seperate closing tag, it is not self-closing.",
      },
      {
        answer: "the content of the web page",
        correct: true,
        response: "That is correct, the html tag contains all the page information!",
      },
      {
        answer: "None of the above",
        correct: false,
        response:
          "Bo, that is incorrect.",
      },
    ],
  },
  {
    dialogue: [],
    question: "The html code at the very top of an HTML file is:",
    options: [
      {
        answer: "<!CSS DOCTYPE>",
        correct: false,
        response: "That is incorrect.",
      },
      {
        answer: "<!DOCTYPE HTML>",
        correct: true,
        response:
          "That is correct!",
      },
      {
        answer: "<DOCTYPE HTML>",
        correct: false,
        response: "That is incorrect.",
      },
      {
        answer: "<!DOCTYPE>",
        correct: false,
        response:
          "That is incorrect.",
      },
    ],
  },
];

let score = 0;
let dialogue = true;
let answerTries = 0;
let points = [10, 7, 4, 1];
let randAnswer = [];

let quizSection = 0;
let quizLength = DIALOG_INFO.length;
let innerSection = 0;
let status = "dialogue";
let answerCorrect = false;
let buttonsActive = false; // to replace spacebar, check if there are buttons to be clicked to continue

let congrats = new Audio("sounds/crowd-cheer.wav");
let wrongAnswer = new Audio("sounds/failure-drum.mp3");
let goodAnswer = new Audio("sounds/applause.wav");

toggleButtons = () => {
  BUTTON_1.classList.toggle("inactive");
  BUTTON_2.classList.toggle("inactive");
  BUTTON_3.classList.toggle("inactive");
  BUTTON_4.classList.toggle("inactive");
};

randomizeAnswers = () => {
  let random = [0, 1, 2, 3]; // answers in the array
  randAnswer = [];
  for(i = random.length; i > 0; i--){
    let number = random.splice(Math.floor(Math.random * i), 1);
    randAnswer.push(number);
  }
};

makeButtonsActive = () => {
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

if (DIALOG_INFO[quizSection].dialogue.length === 0) {
  dialogue = false;
  makeButtonsActive();
}

updateDialogue = () => {
  if (dialogue) {
    DIALOG_BOX.innerHTML = DIALOG_INFO[quizSection].dialogue[innerSection];
    innerSection++;
  } else {
    startQuiz();
  }
};

updateScore = () => {
  SCORE.innerText = score;
};

startGame = () => {
  if (dialogue) {
    toggleButtons();
  }
  updateDialogue();
  updateScore();
};

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
  if (status == "dialogue") {
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
  if (dialogue) {
    toggleButtons();
    makeButtonsActive();
  }
  DIALOG_BOX.innerText = DIALOG_INFO[quizSection].question;
  updateButtons();
};

updateButtons = () => {
  ANSWER_1.innerText = DIALOG_INFO[quizSection].options[0].answer;
  ANSWER_2.innerText = DIALOG_INFO[quizSection].options[1].answer;
  ANSWER_3.innerText = DIALOG_INFO[quizSection].options[2].answer;
  ANSWER_4.innerText = DIALOG_INFO[quizSection].options[3].answer;
};

makeButtonsInactive = () => {
  BUTTON_1.removeEventListener("click", function () {
    checkAnswer(0);
  });
  BUTTON_2.removeEventListener("click", function () {
    checkAnswer(1);
  });
  BUTTON_3.removeEventListener("click", function () {
    checkAnswer(2);
  });
  BUTTON_4.removeEventListener("click", function () {
    checkAnswer(3);
  });
};

checkAnswer = (answer) => {
  if (DIALOG_INFO[quizSection].options[answer].correct) {
    answerCorrect = true;
    DIALOG_BOX.innerText = DIALOG_INFO[quizSection].options[answer].response;
    quizSection++;
    innerSection = 0;
    score += points[answerTries];
    answerTries = 0;
    updateScore();
    if (quizSection == quizLength) {
      endQuiz();
    } else {
      goodAnswer.play();
      if (dialogue) {
        status = "dialogue";
        toggleButtons();
        makeButtonsInactive();
      }
    }
  } else {
    DIALOG_BOX.innerText = DIALOG_INFO[quizSection].options[answer].response;
    wrongAnswer.play();
    if (answerTries != points.length - 1) {
      answerTries++;
    }
  }
};

endQuiz = () => {
  DIALOG_BOX.innerText = "Congratulations!  Your score is " + score;
  status = "end";
  congrats.play();
};

BUTTON_NEXT.addEventListener("click", function(){spaceKeyDown();});

document.onload = startGame();
