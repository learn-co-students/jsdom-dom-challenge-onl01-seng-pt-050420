document.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    let paused = false;
    let interval;
    let likes = {};
    
    function intervalManager() {
        if (paused == true) {
            clearInterval(interval);
        } else {
            interval = setInterval(function(){
                counter = document.getElementById('counter');
                counter.innerHTML = count;
                count++;
            }, 1000);
        }
    };

    function togglePause() {
        paused = !paused;
        setPauseState();
        console.log(`togglePause was run and Paused is now: ${paused}`)     
    };

    function setPauseState() {
        pauseButton = document.getElementById('pause');
        if (paused == true) {
            console.log(`Pause state is now: Paused`) 
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

    document.getElementById('plus').addEventListener("click", function(event) {
        count++;
    });

    document.getElementById('minus').addEventListener("click", function(event) {
        count--;
    });

    document.getElementById('heart').addEventListener("click", function(event) {
        event.preventDefault();
        likes[count] = (likes[count]+1) || 1;
        const ul = document.querySelector('ul');
        let li = document.createElement('li');
        console.log(`${count} has been liked ${likes[count]} time(s)`)
        li.appendChild(document.createTextNode(`${count} has been liked ${likes[count]} time(s)`));
        ul.appendChild(li);    
    });

    document.getElementById('submit').addEventListener("click", function(event) {
        event.preventDefault();
        const list = document.getElementById('list');
        let p = document.createElement('p');
        p.appendChild(document.createTextNode(document.getElementById('comment-input').value));
        list.appendChild(p); 
    });

    intervalManager();
});