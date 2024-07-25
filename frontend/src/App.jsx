import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'

import './App.css'
import Todos from './components/Todos';
import CreateToDo from './components/CreateToDo';


function App() {

  const [todos , settodos] = useState ([])
useEffect(() => {
  fetch("http://127.0.0.1:8880/todo/")
  .then(response=>response.json())
  .then(data => settodos(data))
})
const onUpdateToDo=(updateToDo) =>{
  settodos(todos.map(todo => (todo.id == updateToDo.id ? updateToDo : todo)))
}

  return (
  <div className='container'>
    <div className='row'>
      <div className='col-lg-8 mx-auto my-5'>
        <CreateToDo/>
        <Todos todos={todos} settodos ={settodos}/>

      </div>

    </div>


  </div>
  )
}

export default App
