const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list"); //ul class
const toDoInput = document.querySelector(".todo-form input");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const deleteli = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(deleteli.id));
    deleteli.remove();
    saveTodos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    button.addEventListener("click", deleteToDo);

    span.innerText = newToDo.text;
    li.id = newToDo.id;
    button.innerText = "❌";
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDoInput.value = "";

    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveTodos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const parsedToDos = JSON.parse(savedTodos);
    toDos = parsedToDos;
    // parsedToDos.map(todos=>paintToDo(todos));
    parsedToDos.forEach(paintToDo);
}