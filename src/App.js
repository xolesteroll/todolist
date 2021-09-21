import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";
import {useEffect, useState} from "react";
import TodoList from "./components/TodoList/TodoList";

function App() {

  const [todos, setTodos] = useState( JSON.parse(localStorage.getItem('todos')) || [])
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addNewTodo =  (e) => {
    e.preventDefault()
    if (e.target[0].value) {
      setTodos([...todos, {id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1, text: e.target[0].value}])
      e.target[0].value = ''
    }
  }

  const deleteTodo = (e) => {
    const id = e.target.id
    const filteredTodos = todos.filter(el => +el.id !== +id)
    setTodos(filteredTodos)
    console.log(e.target)
  }

  return (
    <div className="App">
      <TodoForm text={text} updateText={setText} onSubmit={addNewTodo} />
      <TodoList onDelete={deleteTodo} todos={todos}/>
    </div>
  );
}

export default App;
