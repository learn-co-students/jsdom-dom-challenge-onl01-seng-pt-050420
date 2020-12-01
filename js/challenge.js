let count = 0
let paused = false
let interval ;
let likes = []


function intervalManager() {
    if (paused == true) {
        clearInterval(interval)
    } else {
        interval = setInterval(function() {
            counter = document.getElementById("counter");
            counter.innerHTML = count;
            count++;
        },1000);
    } 
}

function togglePause() {
    paused = !paused;
    setPauseState();
};

function setPauseState() {
    pauseButton = document.getElementById('pause');
    if (paused == true) {
        counterElement = document.getElementById('counter');
        counterElement.innerHTML = count;
        disableButtons = document.querySelectorAll('button').forEach(elem => { elem.disabled = true });
        pauseButton.disabled = false;
        pauseButton.innerHTML = 'resume';
    } else {
        disableButtons = document.querySelectorAll('button').forEach(elem => { elem.disabled = false });
        pauseButton.innerHTML = "pause";
    }   
};

document.getElementById('pause').addEventListener("click", function(event) {
    togglePause();
    intervalManager();
}); 

document.getElementById("plus").addEventListener("click", function(e){
    count++;
});

document.getElementById("minus").addEventListener("click", function(e){
    count--;
});

document.getElementById("heart").addEventListener("click", function(e){
    e.preventDefault()
    likes[count] = (likes[count]+1 || 1)
    const ul = document.querySelector('ul')
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${count} has been liked ${likes[count]} time(s)`))
    ul.appendChild(li)
})

document.getElementById("comment-form").addEventListener("submit", function(e) {
    e.preventDefault()
    const list = document.getElementById("list")
    let p = document.createElement("p")
    p.appendChild(document.createTextNode(document.getElementById("comment-input").value))
    list.appendChild(p)
    document.getElementById("comment-input").value = ""
})


intervalManager()