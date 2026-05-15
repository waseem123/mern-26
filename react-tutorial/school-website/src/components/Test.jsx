import { useState } from "react";

export default function Test() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    let data = items.map((item, index) => <li>{item}</li>)
    return (
        <div>
            {/* Add input, button, and list here */}
            <input id="item-input" onChange={(e) => { setInputValue(e.target.value) }}></input>
            <button id="add-btn" onClick={() => {
                if (inputValue!="" || inputValue.length>0) {                    
                    setItems(prev => [...items, inputValue])
                    document.querySelector('#item-input').value = ""
                }else{
                    alert("NOT A VALID INPUT")
                }
            }}>Add</button>
            <ul id="item-list">
                {data}
            </ul>
        </div>
    );
}