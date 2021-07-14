const DIALOG_BOX = document.getElementById("dialogBox");
const ANSWER_1 = document.getElementById("answer1");
const ANSWER_2 = document.getElementById("answer2");
const ANSWER_3 = document.getElementById("answer3");
const ANSWER_4 = document.getElementById("answer4");
const BUTTON_1 = document.getElementById("button1");
const BUTTON_2 = document.getElementById("button2");
const BUTTON_3 = document.getElementById("button3");
const BUTTON_4 = document.getElementById("button4");
const SCORE = document.getElementById("score");

const DIALOG_INFO = [
    {
        dialogue: ["Hey, newbie!  If you ever get stuck on a problem, just ask!  Always start with the <HTML> tag!",
            "Hi there!  I was so nervous when I first started that I was using something other than the forward slash (/) to close a tag!",
            "Hello!  Don't worry, it takes a while before you start to remember which tags are self-closing.  The HTML tag is not one of them!"],
        question: "Which one of these opens and closes the HTML tag?",
        options: [
            {
                answer: "<html></html>",
                correct: true,
                response: "That is correct!  html need a closing tag!"
            },
            {
                answer: "<html />",
                correct: false,
                response: "No, html needs a seperate closing tag, it is not self-closing."
            },
            {
                answer: "<html><html>",
                correct: false,
                response: "No, the closing tag is missing the forward slash."
            },
            {
                answer: "<html><$html>",
                correct: false,
                response: "No, the dollar sign is not the character used to close a tag."
            }
        ]
        
    },
    {
        dialogue: ["Hey, newbie!  If you ever get stuck on a problem, just ask!  Always start with the <HTML> tag!",
            "Hi there!  I was so nervous when I first started that I was using something other than the forward slash (/) to close a tag!",
            "Hello!  Don't worry, it takes a while before you start to remember which tags are self-closing.  The HTML tag is not one of them!"],
        question: "Question2",
        options: [
            {
                answer: "<HTML></HTML>",
                correct: true,
                response: "That is correct!  HTML need a closing tag!"
            },
            {
                answer: "<HTML />",
                correct: false,
                response: "No, HTML needs a seperate closing tag, it is not self-closing."
            },
            {
                answer: "<HTML><HTML>",
                correct: false,
                response: "No, the closing tag is missing the forward slash."
            },
            {
                answer: "<HTML><$HTML>",
                correct: false,
                response: "No, the dollar sign is not the character used to close a tag."
            }
        ]   
    },

];

let spaceDown = false; // a check variable to see if the space key is down
let checkSpaceDown = false; // a check variable to see if we've looked for it already in the case of single actions
let score = 0;
let dialogue = true;
let answerTries = 0;
let points = [10, 7, 4, 1];

let quizSection = 0;
let quizLength = DIALOG_INFO.length;
let innerSection = 0;
let status = "dialogue";
let answerCorrect = false;
let buttonsActive = false; // to replace spacebar, check if there are buttons to be clicked to continue

toggleButtons = () => {
    BUTTON_1.classList.toggle("inactive");
    BUTTON_2.classList.toggle("inactive");
    BUTTON_3.classList.toggle("inactive");
    BUTTON_4.classList.toggle("inactive");
}

if(DIALOG_INFO[quizSection].dialogue.length === 0){
    dialogue = false;
    makeButtonsActive();
}

updateDialogue = () => {
    if(dialogue){
        DIALOG_BOX.innerHTML = DIALOG_INFO[quizSection].dialogue[innerSection];
        innerSection++;
    }
    else {
        startQuiz();
    }
}

updateScore = () => {
    SCORE.innerText = score;
}

startGame = () => {
    if(dialogue){
        toggleButtons();
    }
    updateDialogue();
    updateScore();
}

document.onkeypress = function(event){
    if(event.key == " "){
        spaceDown = true;
        spaceKeyDown();
    }
    
}

document.onkeyup = function(event){
    if(event.key == " "){
        spaceDown = false;
        checkSpaceDown = false;
    }
}

spaceKeyDown = () => {
    if(status == "dialogue" && !checkSpaceDown){
        if(innerSection != 3){
            updateDialogue();
            checkSpaceDown = true;
        }
        else {
            status = "quiz";
            startQuiz();
        }
    }
    else if (status == "quiz" && !answerCorrect){
        DIALOG_BOX.innerText = DIALOG_INFO[quizSection].question;
    }
}

startQuiz = () => {
    if(dialogue){
        toggleButtons();
        makeButtonsActive();
    }
    DIALOG_BOX.innerText = DIALOG_INFO[quizSection].question;
    updateButtons();
}

updateButtons = () => {
    ANSWER_1.innerText = DIALOG_INFO[quizSection].options[0].answer;
    ANSWER_2.innerText = DIALOG_INFO[quizSection].options[1].answer;
    ANSWER_3.innerText = DIALOG_INFO[quizSection].options[2].answer;
    ANSWER_4.innerText = DIALOG_INFO[quizSection].options[3].answer;
}

makeButtonsActive = () => {
    BUTTON_1.addEventListener("click", function(){checkAnswer(0)});
    BUTTON_2.addEventListener("click", function(){checkAnswer(1)});
    BUTTON_3.addEventListener("click", function(){checkAnswer(2)});
    BUTTON_4.addEventListener("click", function(){checkAnswer(3)});
}

makeButtonsInactive = () => {
    BUTTON_1.removeEventListener("click", function(){checkAnswer(0)});
    BUTTON_2.removeEventListener("click", function(){checkAnswer(1)});
    BUTTON_3.removeEventListener("click", function(){checkAnswer(2)});
    BUTTON_4.removeEventListener("click", function(){checkAnswer(3)});
}

checkAnswer = (answer) => {
    if(DIALOG_INFO[quizSection].options[answer].correct){
        answerCorrect = true;
        DIALOG_BOX.innerText = DIALOG_INFO[quizSection].options[answer].response;
        quizSection++;
        innerSection = 0;
        score += points[answerTries];
        answerTries = 0;
        updateScore();
        if(quizSection == quizLength){
            endQuiz();
        }
        else {
            if(dialogue){
                status = "dialogue";
                toggleButtons();
                makeButtonsInactive();
            }
            
        } 
    }
    else{
        DIALOG_BOX.innerText = DIALOG_INFO[quizSection].options[answer].response;
        if(answerTries != points.length){
            answerTries++;
        }
    }
}

endQuiz = () => {
    DIALOG_BOX.innerText = "Congratulations!  Your score is " + score;
    status = "end";
}

document.onload = startGame();