import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {
  
  const [color, setcolor] = useState("olive")

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor : color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl'>
        <button 
        onClick={() => setcolor("red")}
        className='outline-none px-4 py-1 text-white rounded-full'
        style={{backgroundColor : 'red'}}>Red</button>
           <button 
        onClick={() => setcolor("green")}
        className='outline-none px-4 py-1 text-white rounded-full'
        style={{backgroundColor : 'green'}}>Green</button>
           <button 
        onClick={() => setcolor("white")}
        className='border-2 border-black px-4 py-1 text-black rounded-full'
        style={{backgroundColor : 'white'}}>white</button>
           <button 
        onClick={() => setcolor("lime")}
        className='outline-none px-4 py-1 text-white rounded-full'
        style={{backgroundColor : 'lime'}}>lime</button>
           <button 
        onClick={() => setcolor("purple")}
        className='outline-none px-4 py-1 text-white rounded-full'
        style={{backgroundColor : 'purple'}}>purple</button>
         <button 
        onClick={() => setcolor("blue")}
        className='outline-none px-4 py-1 text-white rounded-full'
        style={{backgroundColor : 'blue'}}>blue</button>
      </div>
    </div>
    
   </div>
  )
}

export default App
