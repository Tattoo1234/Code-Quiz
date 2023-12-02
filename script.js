// variables for Javascript page
var pageOneEl = document.querySelector("#firstPage")
var pageTwoEl = document.querySelector("#secondPage")
var pageThreeEl = document.querySelector("#thirdPage")
var pageFourEl = document.querySelector("#fourthPage")
var timerEl = document.getElementById('timer');
var firstQuestion = document.querySelector('#first-question')
var finalScore = document.querySelector("#final-score")
var timeLeft = 75;
var timeInterval
var highScores = document.querySelector("#high-scores");
var initials = document.querySelector("#initials")
var memory = JSON.parse(localStorage.getItem("highScores")) || []


// function to implement time keeping
function countdown() {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
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

// javascript to begin code quiz
document.querySelector("#startQuiz")
    .addEventListener("click", switchPages)


// user switches pages after code quiz is initiated
    function switchPages() {
    countdown()
    pageOneEl.classList.toggle("hide");
    pageTwoEl.classList.toggle("hide");
}


// javascript to label answers 
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
        // checks answer and logs it logs correct, logs incorrect and substracts 10 seconds
        if (correctAnswer === event.target) {
            console.log("correct");
        }
        else {
            console.log("incorrect");
            timeLeft = timeLeft - 10;


        }
        // switches pages after question is answered
        if (questionNumber == 1) {
            switchQuestion()
        }
        else {
            pageTwoEl.classList.toggle("hide");
            pageThreeEl.classList.toggle("hide");
            clearInterval(timeInterval)
            timerEl.textContent = timeLeft + ' seconds remaining';
            finalScore.textContent = "Your final score is " + timeLeft
        }



        document.querySelector("#submit-button")
            .addEventListener('click', lastPage)


    })

// assigns score to local storage
function lastPage() {
    pageThreeEl.classList.toggle("hide");
    pageFourEl.classList.toggle("hide");
    memory.push(initials.value + ' ' + timeLeft);
    localStorage.setItem("highScores", JSON.stringify(memory));

    for (let i = 0; i < memory.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = memory[i]
        highScores.appendChild(createLi);
    }


}

// switches question one to question two
function switchQuestion() {
    firstQuestion.textContent = "String values must be enclosed within______ when being assigned to variables."
    answerOne.textContent = "commas";
    answerTwo.textContent = "curly brakets";
    answerThree.textContent = "quotes";
    answerFour.textContent = "parenthesis";

    questionNumber = 2
}
