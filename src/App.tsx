import "./App.css";
import { Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <header>
        <span>
          <h1>Task Map</h1>
        </span>
        <span>
          <Link to={"/auth"}>Sign In</Link>
          <Link to={"/registration"}>Sign Up</Link>
        </span>
      </header>
      <main>
        <nav>nav</nav>
        <section className="content">
          <TaskList />
          <TaskForm />
        </section>
        <aside>aside</aside>
      </main>
    </div>
  );
}

export default App;
