/**All quiz.js files are used to generate the questions and a quiz with answers and responses
 * Osman Elias
 * Section 8
 */


const quiz = [
    {
      question: "You come across a plain that seems to be endless do you walk out into and explore it?",
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
      question: "You spot a mysterious tower in the distance. Do you investigate?",
      choices: [
        {
          text: "Yes",
          points: -1
        },
        {
          text: "No",
          points: 1
        }
      ]
    },
    {
      question: "A band of thieves approaches you, demanding your valuables. Do you fight back?",
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
      question: "Either way you escape with your life, you find a cave do you enter?",
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
      question: "A friendly merchant offers to sell you a map to navigate these plains. Do you buy it?",
      choices: [
        {
          text: "Yes?",
          points: 1
        },
        {
          text: "No...",
          points: -1
        }
      ]
    },
    {
      question: "The kind merchant offers to share a meal with you. Do you accept?",
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
      question: "You see a suspicious figure lurking in the distance. Do you confront them?",
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
      question: "A demigod who controls these plains begins to run at you, RUN OR HIDE?",
      choices: [
        {
          text: "RUN",
          points: -1
        },
        {
          text: "HIDE",
          points: 1
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
        resultMessage.innerText = "Congratulations! You survived the plains";
      } else {
        resultMessage.innerText = "Oh no! HE GOT YOU, Maybe dont run next time imbecel!!! :O";
      }
      quizContainer.appendChild(resultMessage);
    }
  }
  
  function displayQuiz() {
    displayCurrentQuestion();
    
  }
  
  // initialize the quiz
  displayQuiz();