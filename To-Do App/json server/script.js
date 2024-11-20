import { addTodo, fetchTodos, updateTodo, deleteTodo } from './jsonserver.js'

const userInput = document.getElementById('js-user-input')
const toDoList = document.getElementById('js-table-list')
const modal = document.getElementById('js-modal');

//display data on load
window.onload = async () => {
    const todos = await fetchTodos();
    todos.forEach((todo) => addItem(todo));
};

//Popup Modal
window.toggleModal = () => {
    modal.classList.toggle('hidden');
    modal.classList.toggle('block');
};

//add item to table
function addItem(todo) {
    //tr element
    const element_tr = document.createElement('tr')
    element_tr.classList.add('border-b', 'border-neutral-200')
    element_tr.id = todo.id

    //td element - checkbox col
    const element_complete = document.createElement('td')
    element_complete.classList.add('text-center', 'px-5')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    checkbox.addEventListener('click', () => {
        element_task.classList.toggle('line-through')
        updateTodo({completed: true, id: todo.id , text: todo.text})
    })
    element_complete.appendChild(checkbox)
    
    //td element - list todo col
    const element_task = document.createElement('td')
    element_task.textContent = todo.text
    element_task.classList.add('border-s', 'border-e', 'border-neutral-200', 'px-6', 'py-4', 'break-words', 'whitespace-normal', 'w-3/4')


    //td element - trash icon col
    const element_more = document.createElement('td')
    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fas', 'fa-trash-alt', 'cursor-pointer', 'px-5')
    trashIcon.onclick = () => {
        deleteTodo(todo.id)
        element_tr.remove()
    }
    element_more.appendChild(trashIcon)

    //appending all td inside tr 
    element_tr.appendChild(element_complete)
    element_tr.appendChild(element_task)
    element_tr.appendChild(element_more)

    //append the tr to main table
    toDoList.appendChild(element_tr)
}

//focus on input as soon as modal opens
window.onclick = function (event) {
    if (event.target == modal) {
        toggleModal()
    } else if (modal.classList.contains('block')) {
        userInput.focus();
    }
};

//Modal - Add button functionality
const addButtonModal = async () => {

    const addedTodo = await addTodo({ text: userInput.value, completed: false });
    addItem(addedTodo); 

    userInput.value = ''
    toggleModal()
}

//Pressing enter to add new item
userInput.addEventListener('keypress', async (event) => {
    if (event.key == 'Enter') {
        await addButtonModal()
    }    
})    

//Get date
document.getElementById('date').innerText = new Date().toLocaleDateString('en-us', { weekday:"short", day:"numeric", year:"numeric", month:"long"}) 
