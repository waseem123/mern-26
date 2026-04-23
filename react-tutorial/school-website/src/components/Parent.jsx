import { Link } from "react-router-dom";
import Child from "./Child";
import './styles.css';
import { useState } from "react";

export default function Parent() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("blue-text")
    const [colorName, setColorName] = useState("RED")

    const updateColor = ()=>{
        if(color==="blue-text"){
            setColor("red-text")
            setColorName("BLUE")
        }else{
            setColor("blue-text")
            setColorName("RED")
        }
    }

    const updateCount = () => {
        setCount(count + 1)
    }
    return (
        <div className="container" data-bs-theme="dark">
            <h1>This is a Parent Component</h1>
            <div className="card">
                <div className="card-body">
                    <h3>{count}</h3>
                    <button className="btn btn-primary" onClick={updateCount}>Click me</button>
                </div>
            </div>

            <p className={color}>This is a plain text</p>
            <button className="btn btn-primary" onClick={updateColor}>CHANGE TO {colorName}</button>
        </div>
    )
}