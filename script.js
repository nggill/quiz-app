const quizData = [
    {
        question: 'How old is Mickey Mouse?',
        a: '30',
        b: '55',
        c: '92',
        d: '102',
        correct: 'c'
    },{   question: 'What is the most used programming language in 2022?',
    a: 'Python',
    b: 'C#',
    c: 'Java',
    d: 'JavaScript',
    correct: 'a',
    },{   question: 'Who is the president of the US',
    a: 'Elon Musk',
    b: 'Joe Biden',
    c: 'Jeff Bezos',
    d: 'Ivan Saldano',
    correct: 'b',
    },{   question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Jason Object Notation',
    c: 'Helicopters Terminals Motorboats Lamborginis',
    d: 'Cascading Style Sheet',
    correct: 'a',
    },{   question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1993',
    d: 'none of the above',
    correct: 'b',
    }
];

const questionsEl = document.getElementById("question");
const a_text= document.getElementById("a_text");
const b_text= document.getElementById("b_text");
const c_text= document.getElementById("c_text");
const d_text= document.getElementById("d_text");
const submitBtn= document.getElementById("submit");
let currentQuiz=0;
///call everytime we submit
loadQuiz();

function loadQuiz(){
    const currentQuizData=quizData[currentQuiz];
questionsEl.innerText = currentQuizData.question;
a_text.innerText= currentQuizData.a;
b_text.innerText= currentQuizData.b;
c_text.innerText= currentQuizData.c;
d_text.innerText= currentQuizData.d;

}
submitBtn.addEventListener('click',()=> {
    currentQuiz++;
    if(currentQuiz < quizData.length){
        loadQuiz();
    } else{
        //TODO; show results
        alert("You finished! Congratulations!")}
});