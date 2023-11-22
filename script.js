var pageOneEl = document.querySelector("#firstPage")
var pageTwoEl = document.querySelector("#secondPage")
var pageThreeEl = document.querySelector("#thirdPage")
var pageFourEl = document.querySelector("#fourthPage")


document.querySelector("#startQuiz")
    .addEventListener("click",switchPages)

function switchPages(){
    pageOneEl.classList.toggle("hide");
    pageTwoEl.classList.toggle("hide");
}    

var strings = pageTwoEl.children[1].children[0]
var booleans = pageTwoEl.children[1].children[1]
var alerts = pageTwoEl.children[1].children[2]
var numbers = pageTwoEl.children[1].children[3]
