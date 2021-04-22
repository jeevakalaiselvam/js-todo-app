const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosUlEl = document.getElementById("todos");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = inputEl.value;

  if (todoText) {
    const todoLiEl = document.createElement("li");
    todoLiEl.innerHTML = todoText;
    todosUlEl.appendChild(todoLiEl);
    inputEl.value = "";
  }
});
