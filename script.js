var pageOneEl = document.querySelector("#firstPage")
var pageTwoEl = document.querySelector("#secondPage")
var pageThreeEl = document.querySelector("#thirdPage")
var pageFourEl = document.querySelector("#fourthPage")


document.querySelector("#startQuiz")
    .addEventListener("click", switchPages)

function switchPages() {
    pageOneEl.classList.toggle("hide");
    pageTwoEl.classList.toggle("hide");
}

var answerOne = pageTwoEl.children[1].children[0]
var answerTwo = pageTwoEl.children[1].children[1]
var answerThree = pageTwoEl.children[1].children[2]
var answerFour = pageTwoEl.children[1].children[3]

var firstAnswers = [answerOne, answerTwo, answerThree, answerFour]



for (let i = 0; i < firstAnswers.length; i++)
    firstAnswers[i].addEventListener("click", function () {
        console.log(firstAnswers[i])
    })

if (answerThree) {
    console.log("correct")
}
     else {
    console.log("incorrect")
}

