import { use, useState } from "react"
import Task from "./Task"

export default function TodoParent() {
    const allTasks = []
    const [taskTitle, setTaskTitle] = useState("")
    const [taskCount, setTaskCount] = useState(allTasks.length)

    const addNewTask = () => {
        allTasks.push(taskTitle)
        setTaskCount(taskCount + 1)
        console.log(allTasks)
    }
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-end">Total Number of Tasks - {taskCount}</h2>
                <hr />
                <div>
                    <input onChange={(e) => { setTaskTitle(e.target.value) }} type="text" placeholder="Enter your task" />
                    <button onClick={addNewTask}>Add</button>
                </div>
                <Task taskTitle={allTasks[0]} />
            </div>
        </div>
    )
}