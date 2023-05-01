const quiz = [
    {
      question: "You hear a strange noise coming from the hallway. Do you investigate?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "You see a door slightly ajar. Do you open it?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "The room beyond the door is dark and musty. Do you enter?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "You see a book on a shelf. Do you read it?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "The book contains an incantation. Do you say it aloud?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "The room begins to shake. Do you hold on?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "You hear a voice calling out to you. Do you follow it?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "You find yourself in a room filled with treasure. Do you take some?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "You hear a scream from another room. Do you investigate?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    },
    {
      question: "You encounter a ghost. Do you try to communicate with it?",
      choices: [
        {
          text: "Yes",
          points: 1
        },
        {
          text: "No",
          points: -1
        }
      ]
    }
  ];
  


   



  const quizContainer = document.getElementById("quiz-container");
const nextButton = document.createElement("button");
nextButton.innerText = "Next";
nextButton.addEventListener("click", onNextButtonClick);

let currentQuestionIndex = 0;
const selectedChoices = {};

function displayCurrentQuestion() {
  const currentQuestion = quiz[currentQuestionIndex];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  // create a p element to display the question text
  const questionText = document.createElement("p");
  questionText.innerText = currentQuestion.question;
  questionDiv.appendChild(questionText);

  // loop through the choices array
  const choices = currentQuestion.choices;
  for (let j = 0; j < choices.length; j++) {
    // create a label element for the choice
    const choiceLabel = document.createElement("label");
    choiceLabel.classList.add("choice");

    // create a radio button element for the choice
    const choiceInput = document.createElement("input");
    choiceInput.setAttribute("type", "radio");
    choiceInput.setAttribute("name", "question-" + currentQuestionIndex);
    choiceInput.setAttribute("value", choices[j].points);
    choiceLabel.appendChild(choiceInput);

    // create a span element to display the choice text
    const choiceText = document.createElement("span");
    choiceText.innerText = choices[j].text;
    choiceLabel.appendChild(choiceText);

    // add the choice to the question div
    questionDiv.appendChild(choiceLabel);
  }

  // add the question div and next button to the quiz container
  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionDiv);
  quizContainer.appendChild(nextButton);
}

function onNextButtonClick() {
  // get the selected choice for the current question
  const choiceInputs = document.getElementsByName("question-" + currentQuestionIndex);
  const selectedInput = Array.from(choiceInputs).find(choiceInput => choiceInput.checked);
  if (selectedInput) {
    // add the selected choice to the total points
    const selectedPoints = parseInt(selectedInput.value);
    if (!isNaN(selectedPoints)) {
      if (!selectedChoices[currentQuestionIndex]) {
        selectedChoices[currentQuestionIndex] = 0;
      }
      selectedChoices[currentQuestionIndex] += selectedPoints;
    }
  }

  // increment the current question index
  currentQuestionIndex++;

  if (currentQuestionIndex < quiz.length) {
    // display the next question
    displayCurrentQuestion();
  } else {
    // calculate the total points
    const totalPoints = Object.values(selectedChoices).reduce((accumulator, currentPoints) => accumulator + currentPoints, 0);

    // display the results
    quizContainer.innerHTML = "";
    const resultMessage = document.createElement("p");
    if (totalPoints >= 5) {
      resultMessage.innerText = "Congratulations! You survived the haunted adventure!";
    } else {
      resultMessage.innerText = "Oh no! You didn't survive the haunted adventure.";
    }
    quizContainer.appendChild(resultMessage);
  }
}

function displayQuiz() {
  displayCurrentQuestion();
  
}

// initialize the quiz
displayQuiz();