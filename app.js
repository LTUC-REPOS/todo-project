
let userName = prompt("Hello, Please Enter your name ? ");
console.log(userName);

let gender = prompt("What is your Gender (male/female) ?");
console.log(gender);
if (IsAValidGender(gender)) {
    alert("Invalid Gender");
    gender = prompt("What is your Gender (male/female) ?");
}
console.log(gender);

let age = prompt("Please Enter your age ")

if (IsAValidAge(age)) {
    alert("Invalid age");
    age = prompt("Please Enter your age ")
}
let message = EditMessage(userName,gender,age);
let msgConfirm = confirm("Would you like to receive a welcoming message?")
if (msgConfirm) {
    alert(message);
}



function IsAValidAge(age)
{
    if (age <= 0 || age > 100 || typeof(age) != "number")
        return false;
    return true;
}

function IsAValidGender(gender)
{
    if (gender != "male" && gender != "female")
        return false;
    return true;    
}

function EditMessage (name,gender,age)
{
    let title = (gender == "male") ? "Mr" : "Ms";
    let isValidGender =  (gender == "male" || gender == "female");
    let message = (isValidGender) ? "Welcome " + title + " " + name + "Your Current age is " + age  : "Welcome!";
    return message;
}


/************************* Phase 2  ******************************** */

alert("Please answer the upcoming questions with (Yes/No)")

function CreateQuestions ()
{
    let questions = [];
    questions.push("Do you like Programming ?");
    questions.push("Are you able to set on computer for long time ?");
    questions.push( "Do you code every day ?");

    return questions;
}


function AskQuestions(questions)
{
   
    let Answers = [];
    for (let i = 0; i < questions.length; i++) {
        let answer = prompt(questions[i]);
        if (answer != "")
        {
            Answers.push(answer) 
        }
        else
        {
            Answers.push("invalid") 
            
        }
               
    }
    return Answers;
}


function PrintAnswers(questions,answers)
{
    for (let i = 0; i < questions.length; i++) {
        console.log(questions[i] , answers[i]);        
    }
}

let questions = CreateQuestions();
let answers = AskQuestions(questions);

PrintAnswers(questions, answers);

