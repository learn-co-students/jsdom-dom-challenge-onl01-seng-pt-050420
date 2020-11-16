// comment function

let commentList = document.getElementById('list');

let commentForm = document.getElementById('comment-form');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addComment();
    e.target.reset();
});

function addComment(){
    let p = document.createElement('p');
    let comment = commentForm.elements['comment-input'].value;
    let node = document.createTextNode(comment);
    p.appendChild(node);
    commentList.appendChild(p);
};


// like button function

let counter = document.getElementById('counter').innerText;

let likeButton = document.getElementById('heart');

let likeList = document.getElementsByClassName('likes')[0];

likeButton.addEventListener('click', (e) =>{
    if (document.getElementById(counter)){
        addLike();
    } else {
        newLike();
    };
});

function newLike(){
    let li = document.createElement('li');
    li.setAttribute('id', counter);
    let span = document.createElement('span');
    span.innerText = 1;
    li.appendChild(span);
    li.innerHTML = li.id + " has been liked " + li.innerHTML + " time";
    likeList.appendChild(li);
};

function addLike(){
    let like = document.getElementById(counter);
    let element = like.children[0];
    element.innerText = parseInt(element.innerText) + 1;
    if (element.innerText == 2){
        like.innerHTML = like.innerHTML + "s";
    };
};


// timer adds +1 to counter per second

