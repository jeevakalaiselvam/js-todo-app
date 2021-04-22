//References to DOM elements for dynamic content addition and removal
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosUlEl = document.getElementById("todos");

//Get already presents todos in local storage
const todos = JSON.parse(localStorage.getItem("todos"));
console.log(todos);

if (todos) {
  todos.forEach((todo) => {
    addTodoItem(todo);
  });
}

//Check for input event when use presses enter
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoItem(false);
});

/**
 * This function obtains value from user input and adds it to the DOM list
 */
function addTodoItem(todo) {
  //Get value from user input
  let todoText = inputEl.value;

  //Check if todos are alredy present as argument
  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoLiEl = document.createElement("li");

    if (todo.completed) {
      todoLiEl.classList.add("completed");
    }

    todoLiEl.innerHTML = todoText;
    todosUlEl.appendChild(todoLiEl);
    inputEl.value = "";

    //Check for click event and switch todo between different states
    todoLiEl.addEventListener("click", () => {
      todoLiEl.classList.toggle("completed");
      storeLocalStorage();
    });

    //Check for right click event and remove the element from DOM and local storage
    todoLiEl.addEventListener("contextmenu", (e) => {
      e.preventDefault;
      todoLiEl.remove();
      storeLocalStorage();
    });

    storeLocalStorage();
  }
}

/**
 * Function to update the todo items in local storage.
 * Get all li items and convert them into a array and store it inside the localStorage.
 */
function storeLocalStorage() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerHTML,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
