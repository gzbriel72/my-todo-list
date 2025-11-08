const todoInputEl = document.getElementById("todo-input");
const todoListEl = document.getElementById("todo-list");

let inputValue = "";

todoInputEl.addEventListener("input", (event) => {
  inputValue = event.target.value;
});

todoInputEl.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    if (inputValue.length === 0) {
      return;
    }

    todoListEl.innerHTML += `
      <li class="todo-item">
        <span class="todo-item-content">${inputValue}</span>
        <button class="todo-item-delete-button">
          Deletar
        </button>
      </li>
    `;
    event.target.value = "";
    const todoItems = document.querySelectorAll(".todo-item");

    todoItems.forEach((item) => {
      const [todoItemContent, deleteButton] = item.children;

      todoItemContent.addEventListener("click", () => {
        if (item.style.textDecoration === "line-through") {
          item.style.textDecoration = "none";
        } else {
          item.style.textDecoration = "line-through";
        }
      });

      deleteButton.addEventListener("click", () => {
        item.remove();
      });
    });
  }
});
