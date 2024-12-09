import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slices/todoSlide'

const Form = () => {

  const dispatch = useDispatch()
  const [input, setInput] = useState('')

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo())
        setInput('')
  }
  
    return (
      <form action="" onSubmit={addTodoHandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button type="submit">Submit</button>
    </form>
  )
}

export default Form