import { use, useState } from "react"
import Task from "./Task"

export default function TodoParent() {
    const [allTasks, setAllTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState("")
    const [taskTime, setTaskTime] = useState("")
    const [taskCount, setTaskCount] = useState(0)

    let taskData = allTasks.map(task =>
        <Task taskTitle={task} />
    )
    const addNewTask = () => {
        if (taskTitle == "" || taskTitle.length == 0) {
            alert("Task can not be empty")
        } else {
            setAllTasks(allTasks => [...allTasks, taskTitle])
            setTaskCount(taskCount + 1)
            setTaskTitle("")
        }
    }
    return (
        <div className="container">
            <div className="row">
                <h2 className="text-end">Total Number of Tasks - {taskCount}</h2>
                <hr />
                <div>
                    <input onChange={(e) => { setTaskTitle(e.target.value) }} value={taskTitle} type="text" placeholder="Enter your task" />
                    <input onChange={(e) => { setTaskTime(e.target.value) }} value={taskTime} type="text" placeholder="Enter task time" />
                    <button onClick={addNewTask}>Add</button>
                </div>

                {taskData}

            </div>
        </div>
    )
}