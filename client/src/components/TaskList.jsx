import { useEffect, useState } from "react"; //useEffec Peticiones para backend  UseState Guardar los datos
import { getAllTask } from "../api/Task.api";
import { TaskCard } from "../components/TaskCard";

export function TaskList() {

    const [task, setTask] = useState([])

    useEffect(() => {
        async function loudTask() {
            const res = await getAllTask()
            setTask(res.data)
        }
        loudTask()
    }, [])
    return (
        <div className="grid grid-cols-3 gap-3 m-3">
            {task.map(task => (
                <TaskCard key={task.id}  task={task} />
            ))}
        </div>
    )
}
