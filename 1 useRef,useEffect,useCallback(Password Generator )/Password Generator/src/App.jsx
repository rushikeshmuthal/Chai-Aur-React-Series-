import { useCallback, useEffect, useRef } from "react"
import { useState } from "react"


function App() {
const[length, setLength]=useState(8)
const[numberallowed,setNumberallowed]=useState(false)
const[charallowed,setCharallowed]=useState(false)
const[password,setPassword]=useState("")

let passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{

  let pass = ""
  let str ="ABCDEFGHIKJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberallowed) str += "1234567890"
  if(charallowed) str +="!@#$%^&*(){}~`"
  for (let i=1;i<=length;i++) {
    let char = Math.floor(Math.random()* str.length +1)
    pass +=str.charAt(char)
  }

  setPassword(pass)

},[length,numberallowed,charallowed,setPassword])

const copyPassword =useCallback(()=>{
  passwordRef.current?.select() // to select whole password or 
  passwordRef.current?.setSelectionRange(0,10) //to select first 10 characters of password
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
},[length,numberallowed,charallowed,passwordGenerator])
return (
    <>
    <div className="w-full h-screen bg-zinc-900 py-8">

    <div className="w-full text-xl text-center max-w-md mx-auto px-4 py-4   shadow-md rounded-lg text-orange-500 bg-gray-700">
      <h1 className="text-white my-3">Password Generator</h1>
      <div className="flex rounded-lg overflow-hidden mb-4 shadow ">
        <input 
        type="text"
        value={password}
        readOnly
        placeholder="Password"
        className="outline-none border-none w-full py-2 px-3  "
        ref={passwordRef}
         />
         <button onClick={copyPassword} className="outline-none bg-orange-600 text-white px-4 shrink-0 ">copy</button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div className="flex items-center gap-x-2">
          <input
           type="range" 
           min={6}
           max={100}
           className="cursor-pointer "
           onChange={(e)=> setLength(e.target.value)}
           />
           <label >Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           id="numberInput"
           checked={numberallowed}
           onChange={()=>setNumberallowed((prev)=> !prev)}
           />
           <label htmlFor="numberInput">Numbers</label>
          
        </div>
        <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           id="charInput"
           checked={charallowed}
           onChange={()=>setCharallowed((prev)=> !prev)}
           />
           <label htmlFor="charInput">Characters</label>

        </div>

      </div>
      
    </div>
    </div>


    </>
  )
}

export default App
