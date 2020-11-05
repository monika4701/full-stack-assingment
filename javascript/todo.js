//selector
var todoInput=document.querySelector(".todo-input");
var todoButton=document.querySelector(".todo-button");
var todoList=document.querySelector(".todo-list");

//Event Handlers
todoButton.onclick = create;
todoList.onclick=checkdelete;




//function
function create(e){
    e.preventDefault();
    var newDiv=document.createElement("div");
    newDiv.classList.add("todo");

    var newLi =document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML=todoInput.value;
    todoInput.value=" ";
    newDiv.appendChild(newLi);

    var checkbtn = document.createElement("button");
    checkbtn.classList.add("checkbtn");
    checkbtn.innerHTML= '<i class="fa fa-check"></i>';
    newDiv.appendChild(checkbtn);


    var deletebtn =document.createElement("button");
    deletebtn.classList.add("deletebtn");
    deletebtn.innerHTML= '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);
      
    todoList.appendChild(newDiv);
}
function checkdelete(e) {
   var item =e.target;
   if(item.classList[0]==="deletebtn"){
       var parent = item.parentNode;
       parent.remove();
   }
   if(item.classList[0]==="checkbtn"){
    var parent = item.parentNode;
    parent.classList.toggle("completed");
}
    
}
