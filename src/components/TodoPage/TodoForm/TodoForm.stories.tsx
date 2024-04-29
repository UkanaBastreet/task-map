import { ReduxStoreProviderDecorator } from "../../../../stories/ReduxStoreProviderDecorator";
import TodoForm from "./TodoForm";

export default {
  title: "TodoForm",
  component: TodoForm,
  decorators: ReduxStoreProviderDecorator,
};

export const TodoFormExample = () => <TodoForm  />;
