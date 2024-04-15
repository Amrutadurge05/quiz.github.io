const questions = [
    {
      question: "Which of the following option leads to the portability and security of Java?",
      options: ["Bytecode is executed by JVM", "The applet makes the Java code secure and portable", "Use of exception handlingrlin", "Dynamic binding between objects"],
      correctAnswer: "Bytecode is executed by JVM"
    },
    {
      question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
      options: ["getClass()", "intern()", "getName()", "toString()"],
      correctAnswer: "getName()"

    },
    {
      question: "Which number is wrong in the given series, 3,7,7,11,9,13,13,17,15,23?",
      options: ["9", "23", "13", "17"],
      correctAnswer: "13"

    },
    {
    question: "Which of the following class in Bootstrap is used to create a dropdown menu?",
    options: [".dropdown", ".select", ".select-list", "none of above"],
    correctAnswer: ".dropdown"

  },
  {
   question: "The Bootstrap grid system is based on how many columns?",
        options: ["4", "6", "12", "3"],
        correctAnswer: "12"
    
      }
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  const feedbackElement = document.getElementById("feedback");
  
  function generateRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(option, question.correctAnswer));
      optionsElement.appendChild(optionElement);
    });
  }
  
  function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
      feedbackElement.textContent = "Correct!";
      feedbackElement.style.color = "green";
    } else {
      feedbackElement.textContent = "Incorrect!";
      feedbackElement.style.color = "red";
    }
  }
  
  submitButton.addEventListener("click", generateRandomQuestion);
  
  
  generateRandomQuestion();
  