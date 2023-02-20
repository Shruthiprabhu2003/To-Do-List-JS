const todoform = document.querySelector(".form-todo");
const inputtodo = document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".todo-list");
todoform.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log(inputtodo.value);  //to store input value in console
    const newtodo=inputtodo.value;
    const newli=document.createElement("li");
    const newliinnerhtml=`<span class="text">${newtodo}</span>
                            <div class="todo-buttons">
                                <button class="todo-btn done">Done</button>
                                <button class="todo-btn remove">Remove</button>
                            </div>`
    newli.innerHTML= newliinnerhtml;
    todolist.append(newli);
    inputtodo.value = "";  //to clear typed value after submit/enter
})

todolist.addEventListener("click" ,(e)=>{
    // console.log(e.target);  //to select the clicked part i.e. if i click done it will print done html in console,likewise for remove
    if(e.target.classList.contains("remove")){
        // console.log("you want to remove something ?");
        const targetli = e.target.parentNode.parentNode;
        targetli.remove();
    }
    if(e.target.classList.contains("done")){
        // console.log("great !!");
        const lispan = e.target.parentNode.previousElementSibling; //control will go to <span class="text">Do this</span> as it is parent node i.e. div ka sibling
        lispan.style.textDecoration="line-through";
    }
})