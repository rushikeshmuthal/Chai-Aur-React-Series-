import { useState,  } from 'react'
import {addTodo, } from "../feature/todo/todoSlice"
import { useDispatch, } from 'react-redux'

function AddTodo() {
  const [input, setInput] = useState("");
  // let textToEdit = useSelector(state => state.textToEdit); // Updated to use textToEdit from Redux store
  const dispatch = useDispatch();

  // useEffect to set the input value when textToEdit changes
  // useEffect(() => {
  //   setInput(textToEdit);
  // }, [textToEdit]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    // if (textToEdit !== "") {
    //   // If textToEdit is not empty, it means user is editing, so dispatch updateTodo instead of addTodo
    //   dispatch(updateTodo());
    // } else {
      dispatch(addTodo(input));
    // }
   
    setInput("");
  }
    
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
     {/* {textToEdit !== "" ? "Update Todo" : "Add Todo"} */}
     Add todo
    </button>
  </form>
  )
}

export default AddTodo