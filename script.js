var pageOneEl = document.querySelector("#firstPage")
var pageTwoEl = document.querySelector("#secondPage")
var pageThreeEl = document.querySelector("#thirdPage")
var pageFourEl = document.querySelector("#fourthPage")
var timerEl = document.getElementById('timer');
var firstQuestion = document.querySelector('#first-question')
var timeLeft = 75;

function countdown() {
    // var timeLeft = 75;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'Times up!';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);

        }
    }, 1000);
}


document.querySelector("#startQuiz")
    .addEventListener("click", switchPages)


function switchPages() {
    countdown()
    pageOneEl.classList.toggle("hide");
    pageTwoEl.classList.toggle("hide");
}



var answerOne = pageTwoEl.children[1].children[0]
var answerTwo = pageTwoEl.children[1].children[1]
var answerThree = pageTwoEl.children[1].children[2]
var answerFour = pageTwoEl.children[1].children[3]

var answerArray = [answerOne, answerTwo, answerThree, answerFour]

var correctAnswer = answerThree
var questionNumber = 1
// add event Listener for answer button
for (let i = 0; i < answerArray.length; i++)
    answerArray[i].addEventListener("click", function (event) {

        if (correctAnswer === event.target) {
            console.log("correct");
        }
        else {
            console.log("incorrect");
            timeLeft = timeLeft -10;
            
        
        }
// switches pages after question is answered
        if (questionNumber == 1) {
            switchQuestion()
        }
        else {
            pageTwoEl.classList.toggle("hide");
            pageThreeEl.classList.toggle("hide");
        }

        // checks answer and logs it logs correct, logs incorrect and substracts 10 seconds
        // if (correctAnswer === event.target) {
        //     console.log("correct");
        // }
        // else {
        //     console.log("incorrect");
        //     timeLeft = timeLeft -10;

        
        // }
    })


function switchQuestion() {
    firstQuestion.textContent = "String values must be enclosed within______ when being assigned to variables."
    answerOne.textContent = "commas";
    answerTwo.textContent = "curly brakets";
    answerThree.textContent = "quotes";
    answerFour.textContent = "parenthesis";

    questionNumber = 2
}



