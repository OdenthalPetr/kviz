const quizData = [
   
    {
      question: 'Kdo s kamionu vyhrál Dakar?',
      options: ['Loprais', 'Valter', 'Tomec', 'Macík'],
      correctAnswer: 'Macík'
    },
  
   ];
   const quizContainer = document.getElementById('quiz-container');
   const questionElement = document.getElementById('question');
   const optionsElement = document.getElementById('options');
   const submitButton = document.getElementById('submit-btn');
   const resultElement = document.getElementById('result');
   const restartButton = document.getElementById('restart-btn');
   let currentQuestionIndex = 0;
   let score = 0;
   function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => checkAnswer(option));
      optionsElement.appendChild(button);
    });
   }
   function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
   }
   function showResult() {
    quizContainer.style.display = 'none';
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
    restartButton.style.display = 'block';
   }
   function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultElement.textContent = '';
    restartButton.style.display = 'none';
    showQuestion();
   }
   submitButton.addEventListener('click', () => checkAnswer());
   restartButton.addEventListener('click', restartQuiz);
   showQuestion();





   
