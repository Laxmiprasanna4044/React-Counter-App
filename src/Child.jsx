import React from 'react'
import "./Child.css";

const Child = ({count,counter}) => {

 const incrementButton=()=>{
    counter(count+1);
 };

 const decrementButton=()=>{
    counter(count-1);
 };

 const resetButton=()=>{
    counter(count*0);
 };

  return (
    <div>
        <button className="increment" onClick={incrementButton}>Increment+1</button>
        <button className="decrement" onClick={decrementButton}>Decrement-1</button>
        <button className="reset" onClick={resetButton}>Reset</button>
    </div>
  )
}

export default Child