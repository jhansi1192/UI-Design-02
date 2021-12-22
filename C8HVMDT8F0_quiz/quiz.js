const quiz_container = document.querySelector(".quiz_container");
const option_list = document.querySelector(".option_list")

let questions = [{
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    }
]


let questionsCount = 0
let questionNumber = 1


const next_btn = quiz_container.querySelector(".next_btn")
next_btn.onclick = () => {
    if (questionsCount < questions.length - 1) {
        questionsCount++
        questionNumber++
        displayQuestions(questionsCount)
        questionCounter(questionNumber)

    } else {
        console.log("question completed")
    }
}


function displayQuestions(index) {
    const question = document.querySelector(".que-text");
    let questionTag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    question.innerHTML = questionTag;
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[2] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[3] + '</span></div>';

    option_list.innerHTML = option_tag
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }

}

function optionSelected(answer) {
    let userAns = answer.textContent;

    let correctAns = questions[questionsCount].answer;
    let allOptions = option_list.children.length
    if (userAns == correctAns) {
        answer.classList.add("correct")

    } else {
        answer.classList.add("incorrect")
        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correctAns) {
                option_list.children[i].setAttribute("class", "option correct")

            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled")
    }

}


displayQuestions(questionsCount)


function questionCounter(index) {
    const bottom_ques_counter = quiz_container.querySelector(".total_que");
    let totalQuestions = '<span><p class="num">' + index + '</p>of<p class="num">' + questions.length + '</p>Questions</span>'
    bottom_ques_counter.innerHTML = totalQuestions
}

questionCounter(questionNumber)