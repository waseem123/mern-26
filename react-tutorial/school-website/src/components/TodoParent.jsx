import { use, useState } from "react"
import Task from "./Task"

export default function TodoParent() {
    const [allTasks, setAllTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState("")
    const [taskCount, setTaskCount] = useState(0)
    
    let taskData = allTasks.map(task =>
        <Task taskTitle={task} />
    )
    const addNewTask = () => {
        setAllTasks(allTasks => [...allTasks, taskTitle])
        setTaskCount(taskCount + 1)
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

                {taskData}

            </div>
        </div>
    )
}