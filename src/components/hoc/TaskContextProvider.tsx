import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppDispatch, RootState } from "../../store/store";
import { addTask, removeTask, updateTask } from "../../store/taskSlice";
import TaskList from "../TaskList";
import { ConnectedProps } from "react-redux";

function mapState(state: RootState) {
  return {
    tasks: state.tasksState.tasks,
  };
}
function mapDispatch(dispatch: AppDispatch) {
  return bindActionCreators({ removeTask, updateTask, addTask }, dispatch);
}
const TaskContextProvider = connect(mapState, mapDispatch);
export type TaskContextProps = ConnectedProps<typeof TaskContextProvider>;
export default TaskContextProvider;
