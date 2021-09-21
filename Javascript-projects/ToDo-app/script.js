const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(){

    let todo = input.value;

    if(todo){
        const todoEl = document.createElement("li");

        todoEl.innerText = todo;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed")
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove()
        })

        todosUL.appendChild(todoEl)
        input.value = ""
    }
}