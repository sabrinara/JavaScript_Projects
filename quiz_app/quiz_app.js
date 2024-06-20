const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false }
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true }
        ]
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { text: "Harper Lee", correct: true },
            { text: "Mark Twain", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "F. Scott Fitzgerald", correct: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Silver", correct: false },
            { text: "Iron", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answers: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Platinum", correct: false }
        ]
    },
    {
        question: "Which country is the largest by land area?",
        answers: [
            { text: "Canada", correct: false },
            { text: "China", correct: false },
            { text: "Russia", correct: true },
            { text: "United States", correct: false }
        ]
    },
    {
        "question": "What is the most used programming language in 2021?",
        "answers": [
            { "text": "Java", "correct": false },
            { "text": "C", "correct": false },
            { "text": "Python", "correct": false },
            { "text": "JavaScript", "correct": true }
        ]
    },
    {
        "question": "Who is the President of US?",
        "answers": [
            { "text": "Joe Biden", "correct": true },
            { "text": "Donald Trump", "correct": false },
            { "text": "Barack Obama", "correct": false },
            { "text": "George Bush", "correct": false }
        ]
    },
    {
        "question": "What does HTML stand for?",
        "answers": [
            { "text": "Hypertext Markup Language", "correct": true },
            { "text": "Cascading Style Sheet", "correct": false },
            { "text": "Jason Object Notation", "correct": false },
            { "text": "Helicopters Terminals Motorboats Lamborginis", "correct": false }
        ]
    },
    {
        "question": "What year was JavaScript launched?",
        "answers": [
            { "text": "1996", "correct": false },
            { "text": "1995", "correct": true },
            { "text": "1994", "correct": false },
            { "text": "none of the above", "correct": false }
        ]
    }
];
const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


//-----functions---------------------

// 1. startQuiz function
// 2. showQuestion function
// 3. resetState
// 4. selectAnswer
// 5. handleNextButton
// 6. showScore
//----------------------------------------------
function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
//------------------------display question----------
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;

//---------------------display option-------------------
    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })

}
function resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect= selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
        nextBtn.style.display = "block";
    })



}

function showScore(){
    resetState();
    questionElement.innerHTML=`Your Score ${score} out of ${questions.length} !`
    nextBtn.innerHTML="Play Again";
    nextBtn.style.display="block";
    

}
function handleNextButton(){
    currentQuestionIndex =currentQuestionIndex + 1;
    console.log("currentQuestionIndex=", currentQuestionIndex);
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else {
        startQuiz(); 
    }
})
startQuiz();