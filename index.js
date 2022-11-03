//Quiz CLI to test knowledege of football
let readline = require('readline-sync');

let globalScore = 0;

let questions = [
    {
        question : "Batman is from which Universe DC or Marvel ? ",
        answer : "DC"
    },
    
    {
        question : "Clark Kent is real name of which super hero ",
        answer : "Superman"
    },

    {
        question: "Is wolverine from DC",
        answer: "no"
    },

    {
        question: "Which number robin is jason todd",
        answer: "2"
    },

    {
        question: "Who is the most powerful villain in DC",
        answer: "Darkseid"
    },
]

// function to check answers of questions
function checkAnswer(input, answer) {
    if(input === answer)
        return true;
    return false;
}

const name = readline.question("What is your Name ? ");
console.log("Hello " + name );
console.log("lets start with the quiz");

let answer;
for(let i = 0; i < questions.length; i++) {
    console.log(`Question ${i+1}` );
    answer = readline.question(questions[i].question);
    console.log(questions[i].answer);
    if(checkAnswer(answer, questions[i].answer) === true) {
        globalScore++;
        console.log("correct answer");
    }

}
//final score
console.log("Your final score is" ,globalScore);





