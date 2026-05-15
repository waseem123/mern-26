import { useEffect, useState } from "react"

export default function () {
    const [data, setData] = useState("")

    useEffect(()=>{
        console.log("Your data has been auto-saved.")
    },[data.length%15==0])


    return (
        <div>
            <textarea name="" id="" rows={5} cols={50} onChange={(e)=>{setData(e.target.value)}}></textarea>
        </div>
    )
}