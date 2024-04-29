import { FC } from "react";
import Button from "../../../ui/Button/Button";
import { ITodo } from "../../../../types/Todo";
import "./TodoItem.css";

interface TodoItemProps {
  todo: ITodo;
  removeTodo: (id: number) => void;
  updateTodo: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, removeTodo, updateTodo }) => {
  return (
    <>
      <article className="todo-item">
        <header className="todo-item__header">
          <b style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            {todo.text}
          </b>
          <span>{new Date(todo.date).toDateString()}</span>
        </header>
        <hr />

        <input
          checked={todo.isCompleted}
          onChange={() =>
            updateTodo({ ...todo, isCompleted: !todo.isCompleted })
          }
          type="checkbox"
          name=""
          id=""
        />
        <Button onClick={() => removeTodo(todo.id)}>x</Button>
      </article>
    </>
  );
};

export default TodoItem;
