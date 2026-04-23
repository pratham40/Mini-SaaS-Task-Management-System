import { useEffect, useState } from "react";
import API from "../service/api";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const createTask = async () => {
    if (!title.trim()) return;

    try {
      await API.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const completeTask = async (id) => {
    try {
      await API.put(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">My Tasks</h1>

      <div className="flex mb-4 gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="New task"
        />
        <button
          onClick={createTask}
          disabled={!title.trim()}
          className="bg-blue-500 text-white px-4 rounded disabled:bg-gray-300"
        >
          Add
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`flex justify-between items-center border p-3 mb-2 rounded transition-all duration-300 ${
              task.status === "COMPLETED"
                ? "bg-green-100 border-green-400"
                : "bg-white"
            }`}
          >
            <span
              className={`${
                task.status === "COMPLETED"
                  ? "line-through text-gray-500"
                  : "text-black"
              }`}
            >
              {task.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => completeTask(task.id)}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
              >
                ✓
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                ✕
              </button>
            </div>
          </div>
        ))
      )}

      <button
        onClick={logout}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
