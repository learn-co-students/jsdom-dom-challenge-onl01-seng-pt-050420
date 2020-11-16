let commentList = document.getElementById('list');

let commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment();
    e.target.reset();
});

function addComment(){
    let li = document.createElement('li');
    let comment = commentForm.elements['comment-input'].value;
    let node = document.createTextNode(comment);
    li.appendChild(node);
    commentList.appendChild(li);
};