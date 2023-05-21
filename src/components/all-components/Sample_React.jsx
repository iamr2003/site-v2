import React, { useState } from "react"


export default function Sample_React() {
    const [val, setVal] = useState(0);
    return (
        <div>
            Hi, I'm a react component:
            <button onClick={() => setVal(val - 1)}>-</button>
             {val} 
            <button onClick={() => setVal(val + 1)}>+</button>
            My code is:
            <img src="sample_react.png"/>
        </div>
    );
}