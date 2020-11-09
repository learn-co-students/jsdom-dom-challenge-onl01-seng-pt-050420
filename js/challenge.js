let timeIncrement;
let counterText = document.getElementById("counter")
let minusButton = document.getElementById("minus")
let plusButton = document.getElementById("plus")
let heartButton = document.getElementById("heart")
let pauseButton = document.getElementById("pause")
let submitButton = document.getElementById("submit");
let list = document.getElementById("list");
let commentList = document.createElement("ul");

document.addEventListener("DOMContentLoaded", function () {
    list.appendChild(commentList);
    timeIncrement = window.setInterval(function() {
        incrementCounter()
    }, 1000)

    function toggleButtonDisable(bool) {
        minusButton.disabled = bool;
        plusButton.disabled = bool;
        heartButton.disabled = bool;
        submitButton.disabled = bool;
    }

    function toggleTimer() {
        if (pauseButton.innerText === 'pause') {
            clearInterval(timeIncrement)
            pauseButton.innerText = 'resume'
            toggleButtonDisable(true)
        } else {
            timeIncrement = setInterval(function() {
                incrementCounter()
            }, 1000)
            pauseButton.innerText = 'pause'
            toggleButtonDisable(false)
        }
    }

    plusButton.addEventListener('click', incrementCounter)
    minusButton.addEventListener('click', decrementCounter)
    heartButton.addEventListener('click', displayLikeNumber)
    pauseButton.addEventListener('click', toggleTimer)
    submitButton.addEventListener('click', addComment)
})

function incrementCounter() {
    counterText.innerText = parseInt(counterText.innerText) + 1;
}

function decrementCounter() {
    if (counterText.innerText !== "0") {
        counterText.innerText = parseInt(counterText.innerText) - 1;
    }
}

function displayLikeNumber() {
    let likes = document.getElementsByClassName('likes')[0];
    let newLike = document.createElement("li");
    newLike.innerText = counterText.innerText;
    likes.appendChild(newLike)
}

function addComment() {
    event.preventDefault();
    const newComment = document.getElementById("comment-input").value;
    if (newComment) {
        const newListItem = document.createElement("li")
        newListItem.innerText = newComment
        commentList.appendChild(newListItem)
    }
}