const quizData = [
    {
        question: 'How old is 20 years old person',
        a: '20',
        b: '21',
        c: '99',
        correct: 'a'
    },
    {
        question: 'Which language is most similar to C',
        a: 'Java',
        b: 'JavaScript',
        c: 'HTML',
        correct: 'a'
    },
    {
        question: 'What does HTML stand for',
        a: 'Hypergamystic Trolley Molley Language',
        b: 'Hypertext Markup Language',
        c: 'Helicopters Terminals Motorboats Lamborghinis',
        correct: 'b'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '1995',
        b: '2020',
        c: 'actually i have no idea',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const sumbitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected() {
    const answersEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
            answerEl.checked = false;
        }
    });

    return answer;
}

sumbitBtn.addEventListener('click',() => {
    if (currentQuestion >= quizData.length) return;
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuestion].correct) score++;
        currentQuestion++;
        if (currentQuestion < quizData.length) loadQuiz();   
        else {
            quiz.innerHTML = `<h2>It's the end of this quiz your score is: ${score}/${quizData.length}</h2> <button onClick="location.reload()">Reload</button>`
        }
    }
});
