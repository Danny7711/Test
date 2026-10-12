const todoList = document.getElementById('todo-list');

function renderTodos(todos) {
 todoList.innerHTML = ''; // Очищаем список перед рендером
 todos.forEach((todo, index) => {
   const li = document.createElement('li');
   li.textContent = todo; 
   li.innerHTML += `<button onclick="deleteTodo(${index})">Удалить</button>`;
   todoList.appendChild(li);
 });
}

const todos = JSON.parse(localStorage.getItem('todos')) || [];
renderTodos(todos);
