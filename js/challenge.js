document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("minus").addEventListener("click", function(event) {
        div.innerHTML = --counter;
        event.preventDefault();
    }, false);

    document.getElementById("plus").addEventListener("click", function(event) {
        div.innerHTML = ++counter;
        event.preventDefault();
    }, false);

    document.getElementById("heart").addEventListener('click', function(){
        let like = document.querySelector(".likes")
    
        if(document.getElementById(`Li${time}`) == null){
          let li = document.createElement("li");
          li.setAttribute("id", `Li${time}`)
          li.innerHTML = `${time} - likes: 1`
          like.appendChild(li)
        }
        else {
          let li = document.getElementById(`Li${time}`)
          let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
          li.innerHTML = `${time} - likes: ${splitted}`
          like.appendChild(li)
        }
    
    });

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
  
});