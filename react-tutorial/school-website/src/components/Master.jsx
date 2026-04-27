import { useState } from "react";
import Slave from "./Slave";

export default function Master() {
    const [count, setCount] = useState(0)
    
    const updateCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>I am a MASTER COMPONENT</h1>
            <Slave x={count} />
            <Slave x={count+1} />
            <Slave x={count+2} />

            <button onClick={updateCount}>Click Me</button>
        </div>
    );
}