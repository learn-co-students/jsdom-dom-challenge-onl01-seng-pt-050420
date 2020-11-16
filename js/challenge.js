let counter = document.getElementById('counter');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let time = 0
let start = setInterval(startTimer, 1000)
function startTimer() {
    time++;
    counter.innerText = time;
};
plus.addEventListener('click', function(){
    time++; counter.innerText = time;
});

minus.addEventListener('click', function(){
   if (time > 0) time--; counter.innerText = time;
});

heart.addEventListener('click', function(){}

);

pause.addEventListener('click', function(){
    if (pause.innerText == "pause"){
        clearInterval(start);
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        pause.innerText = 'resume'
    }
    else {
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        pause.innerText = 'pause'
        start = setInterval(startTimer, 1000)
    }
});

const form = document.getElementById('comment-form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const text = form.children[0].value;
    const comments = document.getElementById('list');
    let comment = document.createTextNode(text);
    let p = document.createElement('p');
    p.appendChild(comment);
    comments.appendChild(p);
});



