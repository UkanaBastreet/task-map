import Layout from "./components/Layout/Layout";
import TodoPage from "./components/TodoPage/TodoPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <TodoPage />
      </Layout>
    </div>
  );
}

export default App;
