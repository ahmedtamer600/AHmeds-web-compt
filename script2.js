function calculateScore() {
    var questions = document.querySelectorAll('input[type="radio"]:checked');
    var score = 0;

    questions.forEach(function (question) {
      
        if (question.value === 'a') {
            score++;
     
        }
    });

    alert(`your score is ${score}`)

}