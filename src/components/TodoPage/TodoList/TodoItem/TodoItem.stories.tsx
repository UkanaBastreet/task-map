import TodoItem from "./TodoItem";
import { action } from "@storybook/addon-actions";

export default {
  title: "todoPage/TodoItem",
  component: TodoItem,
};

const removeTodo = action("removeTodo", {});
const updateTodo = action("updateTodo", {});

export const TodoItemExample = () => (
  <TodoItem
    todo={{ id: 1, text: "Test Todo", date: Date.now(), isCompleted: false }}
    removeTodo={removeTodo}
    updateTodo={updateTodo}
  />
);
