import { useState } from "react"


const Todos = ({todos,settodos}) =>{


    return(
        <div className="container mt-4">
           <ul class="list-group">
                {todos.map((todo,index)=>(
                    <li key={index} className="list-group-item d-flex justify-content-between">
                        <span>{todo.title}</span>
                        <button className="btn btn-sm border">{todo.status}</button>
                    </li>
                ))}


           </ul>

        </div>
    )

}
export default Todos