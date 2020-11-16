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

let counter = document.getElementById('counter');

let likeButton = document.getElementById('heart');

let likeList = document.getElementsByClassName('likes')[0];

likeButton.addEventListener('click', (e) =>{
    if (document.getElementById(counter.innerText)){
        addLike();
    } else {
        newLike();
    };
});

function newLike(){
    let li = document.createElement('li');
    li.setAttribute('id', counter.innerHTML);
    let span = document.createElement('span');
    span.innerText = 1;
    li.appendChild(span);
    li.innerHTML = li.id + " has been liked " + li.innerHTML + " time";
    likeList.appendChild(li);
};

function addLike(){
    let like = document.getElementById(counter.innerHTML);
    let element = like.children[0];
    element.innerText = parseInt(element.innerText) + 1;
    if (element.innerText == 2){
        like.innerHTML = like.innerHTML + "s";
    };
};


// timer adds +1 to counter per second

window.setInterval(addOneToCounter, 1000);

function addOneToCounter(){
    counter.innerText = parseInt(counter.innerText) + 1;
};


// increment/decrement counter function

function subtractOneFromCounter(){
    counter.innerText = parseInt(counter.innerText) - 1;
};

let minusButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');

minusButton.addEventListener('click', subtractOneFromCounter)
plusButton.addEventListener('click', addOneToCounter)


// pause/resume function for timer

