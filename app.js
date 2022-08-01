function AskUserForData(message)
{
    let data = prompt(message);
    return data;
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
    let message = (IsAValidGender(gender)) ? "Welcome " + title + " " + name + " Your Current age is " + age  : "Welcome " + name;
    return message;
}


function WelcomeMessage(message)
{
    let msgConfirm = confirm("Would you like to receive a welcoming message?");

    if (!msgConfirm) 
        return;
    else
    {
        alert(message);
    }
}





let userName = AskUserForData("Hello, Please Enter your name");
let gender =  AskUserForData("What is your Gender (male/female) ?");
let age = AskUserForData("Please Enter your age ");
let message = EditMessage(userName,gender,age);
WelcomeMessage(message);




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

