const questions = [
    {
        question: "Which planet has the largest ring system in the solar system?",
        answers: [
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: true },
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
        ],
    },
    {
        question: "Which country is the largest producer of gold in the world?",
        answers: [
            { text: "China", correct: false },
            { text: "Australia", correct: true },
            { text: "Russia", correct: false },
            { text: "Canada", correct: false },
        ]
    },
    {
        question: "When was the tricolour flag first used in Thailand?",
        answers: [
            { text: "During the reign of King Rama V", correct: true, },
            { text: "During the reign of King Rama VI", correct: false, },
            { text: "During the reign of King Rama VII", correct: false, },
            { text: "During the reign of King Rama VIII", correct: false, },
        ],
    },
    {
        question: "What was the first literary work of the Rattanakosin period?",
        answers: [
            { text: "Khun Chang Khun Phaen", correct: false },
            { text: "Inao", correct: false },
            { text: "Sangkh Thong", correct: true },
            { text: "Phra Aphai Mani", correct: false },
        ],
    },
    {
        question: "What is the average resting heart rate for a human?",
        answers: [
            { text: "40-50 beats per minute", correct: false },
            { text: "60-70 beats per minute", correct: true },
            { text: "80-90 beats per minute", correct: false },
            { text: "100-110 beats per minute", correct: false },
        ],
    },
    {
        question: "What is the most abundant element in the human body?",
        answers: [
            { text: "Oxygen", correct: true },
            { text: "Carbon", correct: false },
            { text: "Hydrogen", correct: false },
            { text: "Nitrogen", correct: false },
        ],
    },
    {
        question: "Which animal has the longest lifespan in the world?",
        answers: [
            { text: "Tortoise", correct: false },
            { text: "Whale", correct: false },
            { text: "Snail", correct: true },
            { text: "Eel", correct: false },
        ],
    },
    {
        question: "Which country is the largest producer of crude oil in the world?",
        answers: [
            { text: "United States", correct: false },
            { text: "Saudi Arabia", correct: true },
            { text: "Russia", correct: false },
            { text: "Iran", correct: false },
        ],
    },
    {
        question: "Who was the first Elder Statesman of Thailand?",
        answers: [
            { text: "Sanya Dharmasakti", correct: true },
            { text: "Pridi Banomyong", correct: false },
            { text: "Field Marshal Plaek Phibunsongkhram", correct: false },
            { text: "M.R. Seni Pramoj", correct: false },
        ],
    },
    {
        question: "What is the name of the Earth's moon?",
        answers: [
            { text: "Luna", correct: true },
            { text: "Titan", correct: false },
            { text: "Io", correct: false },
            { text: "Europa", correct: false },
        ],
    },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let curretQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + curretQuestion.question
    curretQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState() {
    nextButton.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.children === "true") {
            button.classList.add("correct");
        }else{
            if(button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz()
    }
})
startQuiz();
