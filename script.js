const questions = [
    {
        question : "Who is the current pm of india?",
        answers:[
            {text:"rahul gandhi", correct:false},
            {text:"amit shah", correct:false},
            {text:"akhliesh yadav", correct:false},
            {text:"modi ji", correct:true}

        ]
    },
    {
        question : "Who is the captain of india men's cricket team?",
        answers:[
            {text:"jay shah", correct:false},
            {text:"amit shah", correct:false},
            {text:"rohit sharma", correct:true},
            {text:"yogi ji", correct:false}

        ] 
    },
    {
        question : "Who will win the ipl 2024?",
        answers:[
            {text:"CSK", correct:false},
            {text:"RCB", correct:true},
            {text:"LSG", correct:false},
            {text:"KXIP", correct:false}

        ]
    },
    {
        question : "What is average salary package of engineer?",
        answers:[
            {text:"10LPA", correct:false},
            {text:"6LPA", correct:false},
            {text:"20LPA", correct:false},
            {text:"Jo mil jaye lelo", correct:true}

        ]
    }
    
]

const questionElement = document.getElementById("ques")
const answerElement = document.getElementById("answer-btn")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex=0
    score=0
    nextButton.innerHTML="Next"
    showQuestion()

}
function resetState(){
    nextButton.style.display="none"
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild)
    }
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex+1
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("btn")
        answerElement.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}
function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct==="true"
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerElement.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
            
        }
        button.disabled=true
    })
    nextButton.style.display="block"
}

function showScore(){
    resetState()
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
}


function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex<questions.length){
        showQuestion()
    }
    else{
        showScore()
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton()
    }
    else{
        startQuiz()
    }
})
startQuiz()



















