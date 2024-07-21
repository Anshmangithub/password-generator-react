import { useState } from 'react'
import Cards from './components/Cards'
import './App.css'

function App() {

  return (
    <>
     <h1 className='bg-green-400 p-4 rounded-xl'>hello i am ansh</h1>

  <Cards name="ansh" btnText="create"  />
    </>
  )
}

export default App
