const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const comments = document.getElementById("list");
const newCommentForm = document.getElementById("comment-form");

document.addEventListener("DOMContentLoaded", () => {
  newCommentForm.addEventListener("submit", createNewComment);
});

const createNewComment = event => {
  event.preventDefault();
  //stop form from trying to submit
  const comment = document.getElementById("comment-input");
  const newComment = document.createElement("li");
  newComment.innerText = comment.value;

  appendNewComment(newComment);
  event.target.reset();
};

const appendNewComment = comment => {
  comments.appendChild(comment);
};