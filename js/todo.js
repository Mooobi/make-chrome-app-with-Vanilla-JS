const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = newToDo;
  const button = document.createElement('button');
  button.textContent = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
