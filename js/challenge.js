document.addEventListener("DOMContentLoaded", function(){

});

const counter_id = document.getElementById("counter")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const form =  document.getElementById("comment-form");

let life = true;

let counter = 0

let timer = setInterval(function(){
  if (life){
    counter_id.innerHTML = counter
    counter += 1;
  }

}, 1000);

minus.addEventListener("click", function(){
    counter -=1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1;

});

plus.addEventListener("click", function(){
    counter +=1;

    counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1;

});

heart.addEventListener("click", function(){
    let like = document.querySelector(".likes")
  
    if(document.getElementById(`Li${counter}`) == null){
      let li = document.createElement("li");
      li.setAttribute("id", `Li${counter}`)
      li.innerHTML = `${counter} have this many likes:1`
      like.appendChild(li)
    }
    else {
      let li = document.getElementById(`Li${counter}`)
      let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
      li.innerHTML = `${counter} have this many likes:${splitted}`
      like.appendChild(li)
    }
  
  });
pause.addEventListener("click",function(){
    if (life){
    pause.innerHTML = "resume"
      life = false
    }
    else{
    pause.innerHTML = "pause"
      life = true
    }
  
  });

  

  form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log(e)
      let comment = e.target.children[0].value
 
      let li = document.createElement('li')
      li.innerText = comment
      let ul = document.getElementById('list')
      ul.appendChild(li)

      li.value = ''

  

  })
     