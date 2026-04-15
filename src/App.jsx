import React,{useState} from 'react'
import "./App.css";
import Child from "./Child.jsx";

const App = () => {

  const [count,setState]=useState(0);

  return (
    <div className="counter-container">
      <h3 className="heading">{count}</h3>
      <Child count={count} counter={setState}/>
    </div>
  )
}

export default App