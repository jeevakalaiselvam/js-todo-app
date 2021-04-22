const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosUlEl = document.getElementById("todos");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoItem();
});

function addTodoItem() {
  const todoText = inputEl.value;

  if (todoText) {
    const todoLiEl = document.createElement("li");
    todoLiEl.innerHTML = todoText;
    todosUlEl.appendChild(todoLiEl);
    inputEl.value = "";

    todoLiEl.addEventListener("click", () => {
      todoLiEl.classList.toggle("completed");
      storeLocalStorage();
    });

    todoLiEl.addEventListener("contextmenu", (e) => {
      e.preventDefault;
      todoLiEl.remove();
    });

    storeLocalStorage();
  }
}

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

function loadLocalStorage() {}
