const counter = document.getElementById('counter')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const likeList = document.querySelector('.likes')

const likeCount = {}
//DOMContentLoaded is used if you want to manipulate anything on the page, you want to make sure the page is loaded first 
//in this lab, it's used b/c my script tag is at the top so we want to make sure whatever under the script tag is loaded before the script tag

setInterval(function() {
    let count = parseInt(counter.innerText)
    count++
    counter.innerText = count
}, 1000)

plusButton.addEventListener("click", incrementTimer)
minusButton.addEventListener("click", decrementTimer)
likeButton.addEventListener("click", likeNum)

function incrementTimer() {
    let count = parseInt(counter.innerText)
    count++
    counter.innerText = count
}

function decrementTimer() {
    let count = parseInt(counter.innerText)
    count--
    counter.innerText = count
}

function likeNum() {
    const count = counter.innerText
    const foundLi = document.querySelector(`li[data-id="${count}"] > source`)
    console.log(foundLi)

    if (foundLi){
        let newCount = count++
        foundLi.innerHTML = `${count} has been liked <source>1</source> times`
    } else {
        likeCount[count] =1 
    }

    const li = document.createElement('li')
    li.innerHTML = `${count} has been liked <source>${likeCount[count]}</source> times`
    li.dataset.id = count 
    li.dataset.potato = "potato"
    likeList.appendChild(li)
}
