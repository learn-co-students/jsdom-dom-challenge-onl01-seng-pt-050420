const form = document.getElementById("comment-form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let text = form.children[0].value;
    addComment(text);
    form.reset()
});

function addComment(text){
    const comments = document.getElementById("list");
    let comment = document.createTextNode(text);
    let p = document.createElement('p');

    p.appendChild(comment);
    comments.appendChild(p);
};

let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let submit = document.getElementById('submit');

const counter = document.getElementById('counter');
const pause = document.getElementById('pause');
let start = setInterval(startTimer, 1000);
let time = 0;

function startTimer() {
    time++;
    counter.innerText = time;
};

pause.addEventListener('click',function(){
    if(pause.innerText == "pause"){
        clearInterval(start);
        pause.innerText = "resume";
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
    } else { 
        start = setInterval(startTimer, 1000);
        pause.innerText = "pause";
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
    }
});

minus.addEventListener('click', function(){
    time--; counter.innerText = time;
});

plus.addEventListener('click', function(){
    time++; counter.innerText = time;
});
let times = [];

heart.addEventListener('click', function(){
    let likes = document.getElementsByClassName('likes')[0];
    let li = document.createElement('li');
    const words = `${time} has been liked`

    times.push(time);
    

    if (getOccurrence(times, time) > 1){
        debugger
        li.innerText = words + ` ${getOccurrence.length} times`;
        likes.appendChild(li);
    }
    
});

function getOccurrence(array, value) {
    array.filter((v) => (v === value)).length;
};