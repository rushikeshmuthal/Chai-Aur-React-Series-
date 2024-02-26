/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {id:1, todo:"Buy groceries", completed:false},
    ],
    addTodo:  (todo) => {},
    updatedTodo: (todo,id)=> {},
    removeTodo: (id)=>{} ,
    toggleComplete :(id)=> {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo =()=> {
    return useContext(TodoContext)
}