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

//add timer to page


 pageTimer= function(){
    var playing=!0
    return setInterval (function(){
        var a=document.getElementById("counter"), b=parseInt(a.innerText); 
        a.innerText=b+1
    })       
}



//attach event listners

newCommentForm.addEventListener("submit", createNewComment);

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