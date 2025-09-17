const inputBox = document.getElementById('inputBox');
const listcont = document.getElementById('listcont');
function addTask(){
    if (inputBox.value === ''){
        alert('Please enter a task');
        return;
    }
    else{
         let li = document.createElement('li');
         li.innerHTML= inputBox.value;
        listcont.appendChild(li);
        let  span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
      }
      inputBox.value = "";
      saveData();
}

listcont.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked');
}
    else if(e.target.tagname === "SPAN"){
    e.target.parentElement.remove();
  }  
}, false);

function saveData(){
    localStorage.setItem("data" , listcont.innerHTML);
}

function showTask(){
    listcont.innerHTML = localStorage.getItem("data");
}
showTask();