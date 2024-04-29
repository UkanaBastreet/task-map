import { FC } from "react";
import { ConnectedProps, connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { RootState } from "../../../store/store";
import { removeTodo, updateTodo } from "../../../store/todoSlice";

import TodoItem from "./TodoItem/TodoItem";

interface TaskListProps extends PropsFromRedux {}

const TaskList: FC<TaskListProps> = ({ todos, removeTodo, updateTodo }) => {
  return (
    <>
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
    </>
  );
};

function mapState(state: RootState) {
  return {
    todos: state.todoState.todos,
  };
}
function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators({ removeTodo, updateTodo }, dispatch);
}
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(TaskList);
