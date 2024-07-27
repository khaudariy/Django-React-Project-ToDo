import { useState } from "react"
import useToDoStore from "../store"

const CreateToDo = () =>{
    const [title , setTitle] =useState() 
    const [status , setStatus] =useState('INPROGRESS')


    const createTodo = useToDoStore((state)=> state.createToDo)

    const handleCreateToDo = (e) => {
        e.preventDefault()
        

        createTodo ({title,status})
        setTitle('')
        setStatus('DONE')


    }

return(
    <div className="container mt-4">
        <form className="row w-100" onSubmit={handleCreateToDo}>
            <div className="col-8">
                <input 
                type="text" 
                className="form-control"
                placeholder="Enter Todo Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                ></input>

            </div>
            <div className="col-2">
                <select 
                className="form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                
                >
                    <option value="DONE">DONE</option>
                    <option value="INPROGRESS">INPROGRESS</option>

                </select>

            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary"> Add ToDo </button>
            </div>
        </form>

    </div>
)

}
export default CreateToDo