/**All quiz.js files are used to generate the questions and a quiz with answers and responses
 * Osman Elias
 * Section 8
 */


const quiz = [
    {
      question: "You've been stranded at sea for days and are feeling very thirsty. Do you drink seawater to quench your thirst?",
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
      question: "You see a group of birds circling in the sky. Do you use them as a sign of land and follow their flight path?",
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
      question: "You find a plastic bag floating in the water. Do you use it to collect drinking water?",
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
      question: "You're feeling hungry and see some fish swimming nearby. Do you catch and eat them raw?",
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
      question: "You're cold and wet, and see some dry clothes on the shore. Do you swim to shore to get them?",
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
      question: "You're feeling tired and see some seaweed floating in the water. Do you use it as a makeshift mattress?",
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
      question: "You see a passing ship in the distance. Do you try to signal it for help?",
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
      question: "A strange man help you aboard do you kill him or accept his hospitality",
      choices: [
        {
          text: "KILL HIM :D",
          points: 1
        },
        {
          text: "Or don't.",
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
        resultMessage.innerText = "Congratulations! You lived to see another day!";
      } else {
        resultMessage.innerText = "Oh no! Shouldve killed him my fellow sailor! He was a serial killer and a cannibal!";
      }
      quizContainer.appendChild(resultMessage);
    }
  }
  
  function displayQuiz() {
    displayCurrentQuestion();
    
  }
  
  // initialize the quiz
  displayQuiz();