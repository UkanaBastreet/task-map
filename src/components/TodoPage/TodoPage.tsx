import { FC } from "react";
import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm/TodoForm";
import "./TodoPage.css";

interface TodoPageProps {}

const TodoPage: FC<TodoPageProps> = ({}) => {
  return (
    <>
      <div className="Todo-page">
        <TodoList />
        <TodoForm />
      </div>
    </>
  );
};

export default TodoPage;
