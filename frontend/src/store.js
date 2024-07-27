import { create } from 'zustand'

const useToDoStore = create ((set) => ({
    todos:[],
    fetchToDos: async () =>{
        const response = await fetch("http://127.0.0.1:8000/todo/")
        const data = await response.json()
        set({todos:data})
    },
    createToDo: async (newToDo) =>{
        const response = await fetch(`http://127.0.0.1:8000/todo/`, {
            method: 'POST',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(newToDo)
        })
        const data = await response.json()
        set((state) => ({todos: [...state.todos,data]}))


    },
    updateToDo: async (updatedToDo) =>{
        const response = await fetch(`http://127.0.0.1:8000/todo/${updatedToDo.id}/`,{
            method: 'PUT',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({title:updatedToDo.title , status:updatedToDo.status})
        })

        const data = await response.json()
        set((state)=>(todos.map(todo => (todo.id == data.id ? data : todo))))

    }




}))
export default useToDoStore