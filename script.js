var myQuestions = [
    {
      question: "What is the Capital of California?",
      answers: {
        a: 'Seattle',
        b: 'Sacramento',
        c: 'San Diego'
      },
      correctAnswer: 'b'
    },
    {
      question: "How many months in a year?",
      answers: {
        a: '3',
        b: '5',
        c: '12'
      },
      correctAnswer: 'c'
    }
  ];
  
  var display = document.getElementById('questions');
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  
    function showQuestions(questions, quizContainer){
      var output = [];
      var answers;
  
      for(var i=0; i<questions.length; i++){
        
        answers = [];
  
        for(letter in questions[i].answers){
  
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
        }
  
        output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
  
      quizContainer.innerHTML = output.join('');
    }
  
  
    function showResults(questions, quizContainer, resultsContainer){
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
      
      var userAnswer = '';
      var numCorrect = 0;
      
      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;
          
          answerContainers[i].style.color = 'green';
        }
        else{
          answerContainers[i].style.color = 'red';
        }
      }
  
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
  
    showQuestions(questions, quizContainer);
    
    submitButton.addEventListener('click', showResults) = function(){
      showResults(questions, quizContainer, resultsContainer);
    }
  
  }