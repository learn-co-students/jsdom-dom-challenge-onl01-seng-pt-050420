let counter = document.getElementById('counter')
let count = parseInt(counter.innerText)
let counterInterval = setInterval(countIncrement, 1000)

function countIncrement() {
    count += 1
    counter.innerText = count
}

let subtractCountButton = document.getElementById('minus')
let addCountButton = document.getElementById('plus')
let pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', function() {
    if (pauseButton.innerText == 'pause') {
        clearInterval(counterInterval)
        pauseButton.innerText = 'resume'
        subtractCountButton.disabled = true
        addCountButton.disabled = true
    } else {
        counterInterval = setInterval(countIncrement, 1000)
        pauseButton.innerText = 'pause'
        subtractCountButton.disabled = false
        addCountButton.disabled = false
    }
})

subtractCountButton.addEventListener('click', function() {
    count -= 1
    counter.innerText = count
})

addCountButton.addEventListener('click', function() {
    count += 1
    counter.innerText = count
})

document.getElementById('submit').addEventListener('click', function(e) {
   let comment = document.getElementById('comment-input').value
   let ul = document.getElementById('ul')
   let li = document.createElement('li')
   li.innerText = comment
   ul.appendChild(li)
   e.preventDefault()
})