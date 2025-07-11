import React, { useState } from 'react';
function Counter() {
const [count,setCount]=useState(0);
const increment=()=>{
    setCount(count+1);
}
const decrement=()=>{
    setCount(count-1);
}
const reset=()=>{
    setCount(0);
}
return(
    <div className='counterpos'>
            <p className="countdisplay">{count}</p>
        <button className="counterbutton" onClick={increment}>Increment</button>
        <button className="counterbutton" onClick={decrement}>Decrement</button>
        <button className="counterbutton" onClick={reset}>Reset</button>
    </div>
);
}
export default Counter