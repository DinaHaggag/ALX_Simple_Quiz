function checkAnswer() {
  const correctAnswer  = "4" ;
  const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  
  let feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer){
    feedback.textContent="Correct! Well done.";
  }else{
    feedback.textContent="That's incorrect. Try again!";
  }

}

let submit = document.getElementById("submit-answer");
submit.addEventListener("click",checkAnswer);