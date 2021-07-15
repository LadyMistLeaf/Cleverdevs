const firebase = require("firebase");
// const admin = require("firebase-admin");
const firebaseConfig = {
  apiKey: "AIzaSyBKdGX7spn7wEBy3umD0WkM5P5OxFw-8mg",
  authDomain: "clever-devs.firebaseapp.com",
  databaseURL: "https://clever-devs-default-rtdb.firebaseio.com",
  projectId: "clever-devs",
  storageBucket: "clever-devs.appspot.com",
  messagingSenderId: "228255562369",
  appId: "1:228255562369:web:6d92ef54cc1af75d636b80",
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// add const DIALOG_INFO json data
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

DIALOG_INFO.forEach((obj) => {
  db.collection("quiz")
    .add({
      dialogue: obj.dialogue,
      question: obj.question,
      options: obj.options,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

module.exports = db;
