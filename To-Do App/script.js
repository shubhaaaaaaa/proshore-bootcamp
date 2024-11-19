const userInput = document.getElementById('js-user-input')
const toDoList = document.getElementById('js-table-list')
const modal = document.getElementById('js-modal');

let items = []

function addItem(newTodo) {
    const element_tr = document.createElement('tr')
    element_tr.classList.add('border-b', 'border-neutral-200')

    const element_complete = document.createElement('td')
    element_complete.classList.add('text-center')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('click', () => {
        element_task.classList.toggle('line-through')
    })
    element_complete.appendChild(checkbox)
    
    const element_task = document.createElement('td')
    element_task.textContent = newTodo
    element_task.classList.add('border-s','border-e', 'border-neutral-200','px-6', 'py-4', 'break-words', 'whitespace-normal')

    const element_more = document.createElement('td')
    const trashIcon = document.createElement('i')
    trashIcon.classList.add('fas', 'fa-trash-alt', 'cursor-pointer', 'px-5')
    trashIcon.onclick = () => {
        element_tr.remove()
        removeFromLocal(newTodo)
    }
    element_more.appendChild(trashIcon)
    element_tr.appendChild(element_complete)
    element_tr.appendChild(element_task)
    element_tr.appendChild(element_more)

    toDoList.appendChild(element_tr)
}

//Popup Modal
window.displayModal = () => {
    modal.classList.toggle('hidden');
    modal.classList.toggle('block');
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.add('hidden');
        modal.classList.remove('block');
    } else if (modal.classList.contains('block')) {
        userInput.focus();
    }
};

//Modal - Add button functionality
const addButtonModal = () => {
    const inputValue = userInput.value

    addItem(inputValue)
    storeLocal(inputValue)
    userInput.value = ''

    modal.classList.add('hidden');
    modal.classList.remove('block');
}

//Pressing enter to add new item
userInput.addEventListener('keypress', function (event) {
    if (event.key == 'Enter') {
        addItem(this.value)
        storeLocal(this.value)
        this.value = ''
        
        modal.classList.add('hidden');
        modal.classList.remove('block');
    }
})


//Retrieve items from local storage
const getLocal = () => {
    const prevLocal = localStorage.getItem('storeLocal')
    if (prevLocal) {
        items = JSON.parse(prevLocal)
        toDoList.innerText = ''

        items.forEach(item => {
            addItem(item)
        })
    }
}

//Store items in local storage
const storeLocal = (item) => {
    items.push(item)
    localStorage.setItem('storeLocal', JSON.stringify(items))
}

//Remove from local
const removeFromLocal = (item) => {
    items = items.filter(i => i!==item)
    localStorage.setItem('storeLocal', JSON.stringify(items))
}

getLocal()
