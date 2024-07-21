
import { useState } from "react"


function App() {
  const [counter, setcounter] = useState(0)

  const increment = ()=>{

    if(counter < 20){
      setcounter(counter + 1);
    }
    
  }
  const decrement = (e)=>{
 
    if(counter > 0){
      setcounter(counter - 1);
    }
    
  }


  return (
    <>
    <div className="mb-">
      <h2>{counter}</h2>
    <button className="btn btn-primary" onClick={increment}>Add counter</button>
    <button  className="btn btn-danger" onClick={decrement}>remove counter</button>
    </div>
    </>
  )
}

export default App
