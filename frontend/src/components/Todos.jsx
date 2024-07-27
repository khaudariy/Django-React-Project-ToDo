import { useEffect, useState } from "react"
import useToDoStore from "../store"

const Todos = () =>{

    const{todos , fetchTodos , updateToDo} = useToDoStore((state) => ({
        todos: state.todos ,
        fetchTodos: state.fetchToDos ,
        updateToDo: state.updateToDo
    }))
    useEffect(()=>{
        fetchTodos();
    })


    const handleToDoUpdate = (todo) =>{
       
        const updatedToDo ={
            
            id: todo.id,
            title: todo.title,
            status: todo.status == "DONE" ? "INPROGRESS" : "DONE"
        }
        updateToDo(updatedToDo)
        
        // fetch(`http://127.0.0.1:8000/todo/${todo.id}/`,{
        //     method: 'PUT',
        //     headers:{
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({title:todo.title , status:updatedStatus})
        // })
        // .then(response =>{
        //     return response.json()
        // })
        // .then(data => {onUpdateToDo(data)})
    }

    return(
        <div className="container mt-4">
           <ul class="list-group">
                {todos.map((todo,index)=>(
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        <span>{todo.title}</span>
                        <button className={`btn btn-sm border ${todo.status == "DONE" ? "btn-success" : "btn-warning"}`} 
                                onClick={() => handleToDoUpdate(todo)}>{todo.status}
                            </button>
                    </li>
                ))}


           </ul>

        </div>
    )

}
export default Todos