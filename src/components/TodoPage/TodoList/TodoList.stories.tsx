import TodoList from "./TodoList";
import { ReduxStoreProviderDecorator } from "../../../../stories/ReduxStoreProviderDecorator";

export default {
  title: "TodoList",
  component: TodoList,
  decorators: [ReduxStoreProviderDecorator],
};

export const TodoListExample = () => <TodoList />;
