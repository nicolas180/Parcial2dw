const startbutton = document.getElementById("btn-empezar");
const NextButton = document.getElementById("btn-siguiente");
const QuestionsContainer = document.getElementById("contenedor-preguntas");

const QuestionElement = document.getElementById("pregunta");
const AnswersButton = document.getElementById("boton-respuesta");

let puntaje = 0;
let termino = 0;

let shufflequestion, currentquestionindex;

startbutton.addEventListener("click", juicio);
NextButton.addEventListener("click", () => {
  currentquestionindex++;
  NextQuestion();
});
function StartGame() {
  console.log("empieza");
  startbutton.classList.add("hide");
  shufflequestion = questions.sort(() => Math.random() - 0.5);
  currentquestionindex = 0;
  QuestionsContainer.classList.remove("hide");
  NextQuestion();
}
function NextQuestion() {
  ReseatEstate();
  ShowQuestion(shufflequestion[currentquestionindex]);
}
function ShowQuestion(question) {
  QuestionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", ChooseAnswer);
    AnswersButton.appendChild(button);
  });
}
function ReseatEstate() {
  NextButton.classList.add("hide");
  while (AnswersButton.firstChild) {
    AnswersButton.removeChild(AnswersButton.firstChild);
  }
}
function ChooseAnswer(e) {
  const ButtonSelection = e.target;
  const correct = ButtonSelection.dataset.correct;
  SetStatusClass(document.body, correct);
  Array.from(AnswersButton.children).forEach((button) => {
    SetStatusClass(button, button.dataset.correct);
  });
  if (shufflequestion.length > currentquestionindex + 1) {
    NextButton.classList.remove("hide");
  } else {
    if (puntaje == 10) {
      console.log("el contador funciona pero no lee");
      document.getElementById("h2codigo").innerHTML =
        "CÓDIGO DE DESCUENTO: cesar-el-mejor";
    }
    termino = 1;
    startbutton.innerText = "Regresar";
    startbutton.classList.remove("hide");
  }
}
function juicio() {
  if (termino === 0) {
    StartGame();
  } else if (termino === 1) {
    regresar();
  }
}
function regresar() {
  window.location = "pago.html";
}
function SetStatusClass(element, correct) {
  CleanState(element);
  if (correct) {
    element.classList.add("correct");
    puntaje += 1;
    console.log("puntaje +1");
  } else {
    element.classList.add("wrong");
  }
}
function CleanState(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question: "¿En que año nacio David Guetta?",
    answers: [
      { text: "1967", correct: true },
      { text: "1969", correct: false },
      { text: "1968", correct: false },
      { text: "1966", correct: false }
    ]
  },
  {
    question: "¿Cual de estas canciones NO es de skrillex?",
    answers: [
      { text: "Bangarang", correct: false },
      { text: "purple lamborghini", correct: false },
      { text: "Mind", correct: false },
      { text: "Someone Else", correct: true }
    ]
  },
  {
    question: "¿Cuantos sencillos tiene Martin Garrix?",
    answers: [
      { text: "80", correct: false },
      { text: "72", correct: true },
      { text: "56", correct: false },
      { text: "79", correct: false }
    ]
  },
  {
    question: "¿Cómo se llama enrealidad Avicci?",
    answers: [
      { text: "Tim", correct: true },
      { text: "Cesar", correct: false },
      { text: "Robert", correct: false },
      { text: "Pepe", correct: false }
    ]
  },
  {
    question: "¿Cual de estas canciones es de Calvin Harrix?",
    answers: [
      { text: "Sky High", correct: false },
      { text: "I need your love", correct: true },
      { text: "Silver Bullet", correct: false },
      { text: "Scary Monsters", correct: false }
    ]
  }
];
