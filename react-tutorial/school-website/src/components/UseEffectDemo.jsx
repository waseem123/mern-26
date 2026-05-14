import { useEffect, useState } from "react";

export default function UseEffectDemo() {
    const [count, setCount] = useState(0)
    const [name,setName] = useState("")

    const myfunction = ()=>{
        document.title = name;
    }
    
    useEffect( 
        myfunction,[name]
    );

    return (
        <>
            <button onClick={()=>{setCount(count+1)}}>Click Me {count}</button>

            <select name="" id="" onChange={(e)=>{setName(e.target.value)}}>
                <option value="Solapur">Waseem</option>
                <option value="Pune">Prathamesh</option>
                <option value="Mumbai">Khadeja</option>
            </select>
            
        </>
    );
}