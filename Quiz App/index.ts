let getMain = document.getElementById('main') as HTMLDivElement
let getNavbar = document.getElementById('navbar') as HTMLDivElement
let getMain2 = document.getElementById('main2') as HTMLDivElement
let gets = document.getElementById('gets') as HTMLSpanElement
let interval: number;
let getsec = document.getElementById('sec') as HTMLSpanElement
let min: number = 0
let sec: number = 60

interface ans{
    question:string,
    selectedAnswer:string,
    correctAnswer:string
}

let userAnswers : ans[] = []
if (localStorage.getItem('name')) {
    getMain.hidden = true
    getNavbar.hidden = false
    getMain2.hidden = false
    interval = setInterval(function () {
        sec--
        getsec.innerHTML = sec.toString()
        if (min == 0 && sec == 0) {
            arr = (score / questions.length) * 100
            sessionStorage.setItem('scoress', arr.toString())
            sessionStorage.setItem('userAnswers', JSON.stringify(userAnswers));
            location.href = 'result.html'
            clearInterval(interval)
        }
    }, 1000)
}
let getbtn = document.getElementById('saveName') as HTMLButtonElement
if (getbtn) {
    getbtn.addEventListener('click', () => {
        let inp = document.getElementById('inp') as HTMLInputElement
        localStorage.setItem('name', inp.value)
        getMain.hidden = true
        getNavbar.hidden = false
        getMain2.hidden = false
        gets.innerHTML = "Hi " + localStorage.getItem('name')
        interval = setInterval(function () {
            sec--
            getsec.innerHTML = sec.toString()
            if (min == 0 && sec == 0) {
                arr = (score / questions.length) * 100
                sessionStorage.setItem('scoress', arr.toString())
                location.href = 'result.html'
            }
        }, 1000)
    })
}

type sample = {
    question: string,
    option1: string,
    option2: string,
    option3: string,
    correctOption: string
}

let questions: sample[] = [
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
]


let ques = document.getElementById('question') as HTMLParagraphElement
let index: number = 0
let btn = document.getElementById('btn') as HTMLButtonElement
let score: number = 0
let arr: number;
let opt1 = document.getElementById('opt1') as HTMLLabelElement
let opt2 = document.getElementById('opt2') as HTMLLabelElement
let opt3 = document.getElementById('opt3') as HTMLLabelElement


function nextQuestion() {
    let options = document.getElementsByName('ans') as NodeListOf<HTMLInputElement>
    for (let i: number = 0; i < options.length; i++) {

        if (options[i].checked) {
            let selectedNumber: string = options[i].value
            let selectedAnswer: string = questions[index - 1][`option${selectedNumber}`]
            let correctOption: string = questions[index - 1].correctOption
            let correctAnswer: string = questions[index - 1].correctOption
            userAnswers.push({ question: questions[index - 1].question, selectedAnswer:selectedAnswer,correctAnswer:correctAnswer });
            console.log(userAnswers)
            if (selectedAnswer == correctOption) {
                score++
            }

        }
        options[i].checked = false
        btn.disabled = true
    }
    if (index > questions.length - 1) {
        clearInterval(interval)
        arr = (score / questions.length) * 100
        sessionStorage.setItem('userAnswers', JSON.stringify(userAnswers));
        sessionStorage.setItem('scoress', arr.toString())
        location.href = 'result.html'
    }
    else {
        ques.innerText = questions[index].question
        opt1.innerText = questions[index].option1
        opt2.innerText = questions[index].option2
        opt3.innerText = questions[index].option3
        index++
    }


}

nextQuestion()

function btnClick() {
    btn.disabled = false
}