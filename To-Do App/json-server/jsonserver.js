const url = 'http://localhost:3000/todos'

const addTodo = async (todo) => {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo)
    })
    return response.json()                                                                                                                                                                                                                                          
}

const fetchTodos = async () => {
    const response = await fetch(url)
    return response.json()
}

const updateTodo = async (id, update) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update)
    })
    return response.json() 
}

const deleteTodo = async (id) => {
    await fetch(`${url}/${id}`, {
        method: 'delete'
    })
    return console.log('Todo deleted')
}

export { addTodo, fetchTodos, updateTodo, deleteTodo }
