import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

import './App.css'
import Todos from './components/Todos';
import CreateToDo from './components/CreateToDo';


function App() {


  return (
  <div className='container'>
    <div className='row'>
      <div className='col-lg-8 mx-auto my-5'>
        <CreateToDo/>
        <Todos/>

      </div>

    </div>


  </div>
  )
}

export default App
