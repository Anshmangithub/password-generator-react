import React, { useCallback, useEffect, useRef, useState } from 'react'
import "./App.css"


const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charallow, setCharallow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const passwordGenerater = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllow) str += "0123456789";
    if(charallow) str += "!@#$%^&*()_+";
     
     for (let i = 0; i < length; i++) {
        const char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
        
     }
      setPassword(pass);

   } ,  [numberAllow , charallow , length , setPassword])

    const copyPassword  = useCallback(()=>{
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0 , 101);
    window.navigator.clipboard.writeText(password);
    } , [password])

   useEffect(()=>{
  passwordGenerater();
   }, [numberAllow , charallow , length])

  return (
    

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-200 text-orange-500'>
    <h2 className='text-black text-center my-3'>Password Generator</h2>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
           value={password}
            className="outline-none w-full py-1 px-3 text-green-950"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
       onClick={copyPassword}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='text-black'>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllow}
          id="numberInput"
          onChange={() => {
            setNumberAllow((prev) => !prev);
          }}
      />
      <label className='text-black' >Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charallow}
              id="characterInput"
              onChange={() => {
                  setCharallow((prev) => !prev )
              }}
          />
          <label className='text-black'>Characters</label>
      </div>
       </div>

    </div>


  )
}

export default App