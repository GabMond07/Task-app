import { useNavigate } from "react-router-dom";

export function TaskCard({ task }) {

    const navigate = useNavigate()

    return (
        <div
            className="bg-zinc-700 p-3 hover:bg-zinc-500 hover:cursor-pointer"
            onClick={() => {
                navigate('/tasks/' + task.id);
            }}
        >
            <h1
                className="font-bold uppercase">{task.title}</h1>
            <p
                className="text-slate-300">{task.description}</p>
        </div>
    )
}
