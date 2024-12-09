import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../redux/slices/todoSlide'

const Home = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    return (
        <>
            {todos.map((todo) => {
                <p>{todo.text}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                </p>
            })}
        </>
    )
}

export default Home