import { useState } from "react";

export default function StateDemo() {

    const [count, setCount] = useState(0)
    const [data, setData] = useState("")

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return (
        <div>

            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <hr />
            <input type="text" onDoubleClick={(e) => {
                let name = e.target.value
                setData(name)
            }} />
            <p>My name is - {data}</p>
        </div>
    );
}