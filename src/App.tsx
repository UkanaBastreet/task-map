import "./App.css";
import Taskage from "./components/pages/TaskPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Taskage />
      </Layout>
    </div>
  );
}

export default App;
