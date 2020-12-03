const counter = document.getElementById("counter")

let counterStart = setInterval(countUp, 1000)

function countUp() {
    counter.innerText = parseInt(counter.innerText) + 1
}

const minus = document.getElementById("minus")

minus.addEventListener("click", countDown)

function countDown() {
    counter.innerText = parseInt(counter.innerText) - 1
}

const plus = document.getElementById("plus")

plus.addEventListener("click", countUp)

const heart = document.getElementById("heart")

const likes = document.querySelector("ul.likes")

let likedNumbers = {}

heart.addEventListener("click", likeNumber)

function likeNumber() {
    let numberSecond = counter.innerText
    likedNumbers[numberSecond] = likedNumbers[numberSecond] || 0
    likedNumbers[numberSecond] += 1
    showLikes()
}

function showLikes() {
    likes.innerHTML = ""
    for (let key in likedNumbers){
        const li = document.createElement("li")
        li.innerText = `${key} has been liked ${likedNumbers[key]} times.`
        likes.append(li)
    }
}

const pause = document.getElementById("pause")

let paused = false

pause.addEventListener("click", togglePause)

function togglePause() {
    paused = !paused
    if (paused) {
        clearInterval(counterStart)
        pause.innerText = "Resume"
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        submit.disabled = true
    } else {
        counterStart = setInterval(countUp, 1000)
        pause.innerText = "Pause"
        minus.disabled = false
        plus.disabled = false
        heart.disabled = false
        submit.disabled = false
    }
}

const commentForm = document.getElementById("comment-form")

const comments = document.getElementById("list")

const submit = document.getElementById("submit")

commentForm.addEventListener("submit", submitComment)

function submitComment(event) {
    event.preventDefault()
    const comment = event.target.querySelector("input").value
    li = document.createElement("li")
    li.innerText = comment
    comments.append(li)
    event.target.reset()
}


