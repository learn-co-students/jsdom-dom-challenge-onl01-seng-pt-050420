document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  
  let timerValue = 0;
  let likeCounters = []; 
  let likes = document.getElementsByClassName("likes")[0];
  let counter = document.getElementById("counter");
  let minus = document.getElementById("minus");
  let plus = document.getElementById("plus");
  let heart = document.getElementById("heart");
  let pause = document.getElementById("pause");
  let commentList = document.getElementById("list");
  let commentForm = document.getElementById("comment-form");
  let commentBox = document.getElementById("comment-input");
  let submit = document.getElementById("submit");
  
  let likeText = document.createElement("LI");
  likes.appendChild(likeText);
  let timer = window.setInterval(increment, 1000);
  
  function increment() { timerValue++; update(); }
  function decrement() { timerValue--; update(); }
  
  function update() {
    counter.innerText = timerValue;
    if (likeCounters[timerValue] === undefined) {
      likeCounters[timerValue] = 0;
    }
    likes.innerText = likeCounters[timerValue] + " likes!";
  }

  minus.addEventListener(
    "click",
    function(e) {
      decrement();
      console.log("Minus");
    }
  );
  
  plus.addEventListener(
    "click",
    function(e) {
      increment();
      console.log("Plus");
    }
  );
  
  heart.addEventListener(
    "click",
    function(e) {
      console.log("Heart");
      console.log(likeCounters[timerValue]);
      if (likeCounters[timerValue] !== undefined) {
        likeCounters[timerValue]++;
      } else {
        likeCounters[timerValue] = 1;
      }
      update();
    }
  );
  
  pause.addEventListener(
    "click",
    function(e) {
      if (pause.innerText === "pause") {
        window.clearInterval(timer);
        pause.innerText = "resume";
        console.log("Pause");
      } else {
        timer = window.setInterval(increment, 1000);
        pause.innerText = "pause";
        console.log("resume");
      }
    }
  );
  
  commentForm.addEventListener(
    "submit",
    function(e) {
      e.preventDefault();
      let newComment = document.createElement("P");
      newComment.innerText = commentBox.value;
      commentBox.value = "";
      list.appendChild(newComment);
    }
  );
});
