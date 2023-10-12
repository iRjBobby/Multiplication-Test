const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const question = document.getElementById("questions");
const inputElement = document.getElementById("input");
const formElement = document.getElementById("form");
const scoreElement = document.getElementById("score");



let score = JSON.parse(sessionStorage.getItem("score"));
// let score = 0;

if(!score){
    score = 0;
}

scoreElement.innerText = "score is: " + score ;

question.innerText = "What is " + num1 + " multiply by " + num2 + " ?";

const correctAnswer = num1 * num2;

formElement.addEventListener("submit",myFunction);

function myFunction(){
    const userAnswer = +inputElement.value
    if(userAnswer === correctAnswer){
        score++;
        extrastorage();
        scoreElement.innerText = "score is: " + score;
    } else {
        score--;
        extrastorage();
        scoreElement.innerText = "score is: " + score;
    }
}





function extrastorage(){
    sessionStorage.setItem("score", JSON.stringify(score))
}





// const correctAns = num1*num2;
// const question = document.getElementById("questions");
//         question.innerText = "What is "+num1+" multiply by "+num2+" ?";
// let progress = 0;
// let scoreEl = document.getElementById("score");
//     scoreEl.innerText = "Score is: "+progress;

