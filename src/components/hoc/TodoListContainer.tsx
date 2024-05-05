import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch, RootState } from "../../store/store";
import { removeTask, updateTask } from "../../store/taskSlice";
import TaskList from "../TodoList";

function mapState(state: RootState) {
  return {
    tasks: state.tasksState.tasks,
  };
}
function mapDispatch(dispatch: AppDispatch) {
  return bindActionCreators({ removeTask, updateTask }, dispatch);
}
const connector = connect(mapState, mapDispatch);
// type PropsFromRedux = ConnectedProps<typeof connector>;
const TodoListContainer = connector(TaskList);
export default TodoListContainer;
