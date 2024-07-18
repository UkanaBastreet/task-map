import "./App.css";
import TaskList from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";
import { Task } from "./components/TaskItem";
import { useState } from "react";
import { Anchor } from "./components/ui/Anchor/Anchor";
import { Link } from "react-router-dom";

const initTasks: Task[] = [
  {
    id: 1713959934011,
    title: "1111",
    status: "open",
    createdAt: new Date("2024-04-24T11:58:54.011Z"),
    updatedAt: new Date("2024-04-24T11:58:54.011Z"),
  },
  {
    id: 1713959935504,
    title: "222",
    status: "open",
    createdAt: new Date("2024-04-24T11:58:55.504Z"),
    updatedAt: new Date("2024-04-24T11:58:55.504Z"),
  },
  {
    id: 1713959936212,
    title: "333",
    status: "open",
    createdAt: new Date("2024-04-24T11:58:56.212Z"),
    updatedAt: new Date("2024-04-24T11:58:56.212Z"),
  },
  {
    id: 1713959936663,
    title: "asdf",
    status: "open",
    createdAt: new Date("2024-04-24T11:58:56.663Z"),
    updatedAt: new Date("2024-04-24T11:58:56.663Z"),
  },
  {
    id: 1713959937060,
    title: "dsafasdfasdf",
    status: "open",
    createdAt: new Date("2024-04-24T11:58:57.060Z"),
    updatedAt: new Date("2024-04-24T11:58:57.060Z"),
  },
  {
    id: 1713959937416,
    title: "aszxcvzxcvzxcvdf",
    status: "open",
    createdAt: new Date("2024-04-24T11:58:57.416Z"),
    updatedAt: new Date("2024-04-24T11:58:57.416Z"),
  },
  {
    id: 1713959938326,
    title: "qwer",
    status: "open",
    createdAt: new Date("2024-04-24T11:58:58.326Z"),
    updatedAt: new Date("2024-04-24T11:58:58.326Z"),
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initTasks);

  function addTask(task: Task) {
    setTasks((t) => [...t, task]);
    console.log(tasks);
  }
  function removeTask(taskId: number) {
    setTasks((tasks) => tasks.filter((t) => t.id !== taskId));
  }
  function updateTask(taskId: number, value: any) {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === taskId) {
          return { ...t, ...value };
        } else {
          return t;
        }
      })
    );
  }

  return (
    <div className="App">
      <header>
        <span>
          <h1>Task Map</h1>
        </span>
        <span>
          <Link to={"/auth"}>sign in</Link>
          <Link to={"/auth"}>sign up</Link>
        </span>
      </header>
      <main>
        <nav>nav</nav>
        <section className="content">
          <TaskList tasks={tasks} />
          <TaskForm addTask={addTask} />
        </section>
        <aside>
          <Anchor
            links={tasks.map((task) => ({
              id: task.id.toString(),
              title: task.title,
            }))}
          />
        </aside>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
}

export default App;
