document.addEventListener("DOMContentLoaded", () => {
//grab all the necessary DOM elements

const timer = document.getElementById("counter");
const timerDown = document.getElementById("minus");
const timerUp = document.getElementById("plus");
const likes = document.getElementById("heart");
const timerpause = document.getElementById("pause");  
const newCommentForm = document.getElementById("comment-form");
const newCommentText = document.getElementById("comment-input");  

//ul where new comments will live on the DOM 
const newComment = document.getElementById("list");

//attach event listners

newCommentForm.addEventListener("submit", createNewComment);

// Counter functionality
var i = -1;
var j = 0
var interval = setInterval(increment, 1000);
function increment(){
    i++;
    timer.textContent = i;
    j = 0;
}
increment();

// manually add seconds functionality
timerUp.addEventListener("click", function(){
    i++;
    timer.textContent = i;
});

// add minus functionality
timerDown.addEventListener("click", function(){
    i--;
    timer.textContent = i;
});

//add like functionality 
likes.addEventListener("click", function(){
    j++;
    var li = document.createElement("li");
    var node = document.createTextNode(i + " has been liked " + j + " time(s).")
    var like = document.querySelector('.likes')
    var lastLike = document.querySelector('.likes').lastChild
    li.appendChild(node);
    if(j>1){
     lastLike.replaceWith(li)
    } 
    else {
      like.appendChild(li);
    }
  });

//add pause functionality
timerpause.addEventListener("click", function(){
    if(timerpause.innerText == "pause") {
      clearInterval(interval)
      timerpause.innerText = "resume"
      timerDown.disabled = true;
      timerUp.disabled = true;
      likes.disabled = true;
      document.getElementById("submit").disabled = true;
    } else {
      interval = setInterval( increment, 1000);
      timerpause.innerText = "pause"
      timerDown.disabled = false;
      timerUp.disabled = false;
      likes.disabled = false;
      document.getElementById("submit").disabled = false;
    }
  });

});

const createNewComment = event =>{
event.preventDefault();
//stop form from trying to sybmit
const newCommentText = document.getElementById("comment-input");
const newComment = document.createElement("li");
newComment.innerText = newCommentText.value;

appendNewComment(newComment);
event.target.reset();
};

const appendNewComment = comment =>{
    document.getElementById("list").appendChild(comment);
};