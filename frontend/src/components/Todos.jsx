import { useState } from "react"


const Todos = ({todos,settodos,onUpdateToDo}) =>{

    const handleToDoUpdate = (todo) =>{
        const updatedStatus = todo.status == "DONE" ? "INPROGRESS" : "DONE"
        fetch(`http://127.0.0.1:8880/todo/${todo.id}/`,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title:todo.title , status:updatedStatus})
        })
        .then(response =>{
            return response.json()
        })
        .then(data => {onUpdateToDo(data)})
    }

    return(
        <div className="container mt-4">
           <ul class="list-group">
                {todos.map((todo,index)=>(
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        <span>{todo.title}</span>
                        <button className="btn btn-sm border" onClick={() => handleToDoUpdate(todo)}>{todo.status}</button>
                    </li>
                ))}


           </ul>

        </div>
    )

}
export default Todos