const quiz = [
    {
      question: "You enter a forest. Do you follow the path?",
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
      question: "You come across a river. Do you cross it?",
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
      question: "You find a map. Do you use it?",
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
      question: "You see an abandoned cabin. Do you enter?",
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
      question: "You hear whispers. Do you investigate?",
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
      question: "You see a strange light in the distance. Do you follow it?",
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
      question: "You find an old compass. Do you use it?",
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
  
   // get the quiz container element
    const quizContainer = document.getElementById("quiz-container");
  
  
    function displayQuiz() {
    // loop through the quiz array and create HTML elements to display each question and its choices
    console.log("displayQuiz() function called");
    for (let i = 0; i < quiz.length; i++) {
      // create a div element to hold the question and its choices
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");
  
      // create a p element to display the question text
      const questionText = document.createElement("p");
      questionText.innerText = quiz[i].question;
      questionDiv.appendChild(questionText);
  
      // loop through the choices array
      const choices = quiz[i].choices;
      for (let j = 0; j < choices.length; j++) {
        // create a label element for the choice
        const choiceLabel = document.createElement("label");
        choiceLabel.classList.add("choice");
  
        // create a radio button element for the choice
        const choiceInput = document.createElement("input");
        choiceInput.setAttribute("type", "radio");
        choiceInput.setAttribute("name", "question-" + i);
        choiceInput.setAttribute("value", choices[j].points);
        choiceLabel.appendChild(choiceInput);
  
        // create a span element to display the choice text
        const choiceText = document.createElement("span");
        choiceText.innerText = choices[j].text;
        choiceLabel.appendChild(choiceText);
  
        // add the choice to the question div
        questionDiv.appendChild(choiceLabel);
      }
  
      // add the question div to the quiz container
      quizContainer.appendChild(questionDiv);
    }
  
    // create a submit button to submit the quiz
    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit Quiz";
    submitButton.addEventListener("click", submitQuiz);
    quizContainer.appendChild(submitButton);
  }
  
  function submitQuiz() {
    // get all the selected choices
    const selectedChoices = quiz.reduce((accumulator, currentQuestion, questionIndex) => {
      const choiceInputs = document.getElementsByName("question-" + questionIndex);
      const selectedInput = Array.from(choiceInputs).find(choiceInput => choiceInput.checked);
      if (selectedInput) {
        accumulator[currentQuestion.question] = parseInt(selectedInput.value);
      }
      return accumulator;
    }, {});
  
    // calculate the total points
    const totalPoints = Object.values(selectedChoices).reduce((accumulator, currentPoints) => accumulator + currentPoints, 0);
  
    // display the results
    quizContainer.innerHTML = "";
    const resultMessage = document.createElement("p");
    if (totalPoints >= 5) {
      resultMessage.innerText = "Congratulations! You survived the haunted forest!";
    } else {
      resultMessage.innerText = "Oh no! You didn't survive the haunted forest" ;
    }
    quizContainer.appendChild(resultMessage);
  }
  