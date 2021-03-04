const input = document.querySelector('input');

function addingEventListener() {
  input.addEventListener('click', function(event) {
    return "clicked"
  });
}

const count = document.querySelector('counter');
const minus = document.querySelector('minus');
const plus = document.querySelector('plus');

function addingEventListener() {
    plus.addEventListener('click', function(event) {
      count++
    });
  }

function addingEventListener() {
    minus.addEventListener('click', function(event) {
      count--
    });
  }  

//   let articleHearts = document.querySelectorAll(".like-glyph");

//   function likeCallback(e) {
//     let heart = e.target;
//     mimicServerCall()
//       .then(function(serverMessage){
//         heart.innerText = glyphStates[heart.innerText];
//         heart.style.color = colorStates[heart.style.color];
//       })
//       .catch(function(error) {
//         alert("Something went wrong!");
//       });
//   }

//   for (let glyph of articleHearts) {
//     glyph.addEventListener("click", likeCallback);
//   }


const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const likeBtn = document.getElementById("heart");
const likeList = document.querySelector(".likes")
const likeCount = {}
//console.log(likeList);

// console.log(counter);

// "DOMContentLoaded" - ensures the entire page is loaded, if my script tag is at the top

setInterval(incrementTimer, 1000)

// console.log(plusBtn);
// console.log(minusBtn);

plusBtn.addEventListener("click", incrementTimer)
minusBtn.addEventListener("click", decrementTimer)
likeBtn.addEventListener("click", likeNum)

function incrementTimer () {
  //console.log("clicked")
  let count = parseInt(counter.innerText)
  count++
  counter.innerText = count
}

function decrementTimer () {
  let count = parseInt(counter.innerText)
  count--
  counter.innerText = count
}

function likeNum(){
  //console.log("liked")
  const count = counter.innerText
  const foundLi = document.querySelector(`li[data-id="${count}"] > source`)
  console.log(foundLi);
  //console.log(count);
  if(foundLi){
    let newCount = count++
    foundLi.innerText = `${count} has been liked <source>1</source> times`
  } else {
    likeCount[count] = 1
  }

  const li = document.createElement('li')
  li.innerHTML = `${count} has been liked <source>${likeCount[count]}</source> times`;
  li.dataset.id = count
  li.dataset.potato = "potato"
  likeList.appendChild(li)
}
