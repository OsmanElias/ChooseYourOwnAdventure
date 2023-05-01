



// create an object to hold the quiz questions and their corresponding point values


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





