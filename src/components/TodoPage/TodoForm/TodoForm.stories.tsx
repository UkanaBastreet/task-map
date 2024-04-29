import { ReduxStoreProviderDecorator } from "../../../../stories/ReduxStoreProviderDecorator";
import TodoForm from "./TodoForm";
import { action } from "@storybook/addon-actions";

export default {
  title: "TodoForm",
  component: TodoForm,
  decorators: ReduxStoreProviderDecorator,
};

export const TodoFormExample = () => <TodoForm  />;
