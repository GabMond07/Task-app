import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="m-5 flex justify-between items-center py-8 ">
      <Link to="/tasks">
        <h1 className="font-bold text-4xl mb-4">TaskApp</h1>
      </Link>
      <button className="bg-indigo-500 p-3 py-2 rounded-lg flex justify-center items-center">
        <Link to="/tasks-create">Create task</Link>
      </button>
    </div>
  );
}
