var getMain = document.getElementById('main');
var getNavbar = document.getElementById('navbar');
var getMain2 = document.getElementById('main2');
var gets = document.getElementById('gets');
var interval;
var getsec = document.getElementById('sec');
var min = 0;
var sec = 60;
var userAnswers = [];
if (localStorage.getItem('name')) {
    getMain.hidden = true;
    getNavbar.hidden = false;
    getMain2.hidden = false;
    interval = setInterval(function () {
        sec--;
        getsec.innerHTML = sec.toString();
        if (min == 0 && sec == 0) {
            arr = (score / questions.length) * 100;
            sessionStorage.setItem('scoress', arr.toString());
            sessionStorage.setItem('userAnswers', JSON.stringify(userAnswers));
            location.href = 'result.html';
            clearInterval(interval);
        }
    }, 1000);
}
var getbtn = document.getElementById('saveName');
if (getbtn) {
    getbtn.addEventListener('click', function () {
        var inp = document.getElementById('inp');
        localStorage.setItem('name', inp.value);
        getMain.hidden = true;
        getNavbar.hidden = false;
        getMain2.hidden = false;
        gets.innerHTML = "Hi " + localStorage.getItem('name');
        interval = setInterval(function () {
            sec--;
            getsec.innerHTML = sec.toString();
            if (min == 0 && sec == 0) {
                arr = (score / questions.length) * 100;
                sessionStorage.setItem('scoress', arr.toString());
                location.href = 'result.html';
            }
        }, 1000);
    });
}
var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
];
var ques = document.getElementById('question');
var index = 0;
var btn = document.getElementById('btn');
var score = 0;
var arr;
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
function nextQuestion() {
    var options = document.getElementsByName('ans');
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var selectedNumber = options[i].value;
            var selectedAnswer = questions[index - 1]["option".concat(selectedNumber)];
            var correctOption = questions[index - 1].correctOption;
            var correctAnswer = questions[index - 1].correctOption;
            userAnswers.push({ question: questions[index - 1].question, selectedAnswer: selectedAnswer, correctAnswer: correctAnswer });
            console.log(userAnswers);
            if (selectedAnswer == correctOption) {
                score++;
            }
        }
        options[i].checked = false;
        btn.disabled = true;
    }
    if (index > questions.length - 1) {
        clearInterval(interval);
        arr = (score / questions.length) * 100;
        sessionStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        sessionStorage.setItem('scoress', arr.toString());
        location.href = 'result.html';
    }
    else {
        ques.innerText = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}
nextQuestion();
function btnClick() {
    btn.disabled = false;
}
