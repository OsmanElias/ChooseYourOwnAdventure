/**All quiz.js files are used to generate the questions and a quiz with answers and responses
 * Osman Elias
 * Section 8
 */


const quiz = [
    {
      question: "You're an adventurer exploring a lost city in the jungle. You come to a fork in the path. Do you go left?",
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
      question: "You come across a temple with a locked door. Do you pick try to pick it?",
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
      question: "You successfully pick the lock and enter the temple. Do you search for treasure?",
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
      question: "You hear noises in the mist of all this chaos, do you investigate?",
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
      question: "You find yourself face-to-face with a tribe of angry natives, what do you do",
      choices: [
        {
          text: "RUN",
          points: 1
        },
        {
          text: "FIGHT",
          points: -1
        }
      ]
    },
    {
      question: "Either way the natives attack you, you are hurt but you see a tunnel do you crawl through?",
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
      question: "You encounter a group of people. Do you join them?",
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
      question: "These people say they know a way out do you listen?",
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
  

  //Function to loop through the questions and create a quiz
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
        resultMessage.innerText = "Congratulations! You survived the Lost City!";
      } else {
        resultMessage.innerText = "Oh no! You didn't survive the Lost City";
      }
      quizContainer.appendChild(resultMessage);
    }
  }
  
  function displayQuiz() {
    displayCurrentQuestion();
    
  }
  
  // initialize the quiz
  displayQuiz();