import { FC } from "react";
import { ConnectedProps, connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";

import { RootState } from "../store/store";
import { removeTask, updateTask } from "../store/taskSlice";

import { ITask } from "../types/task";

import { TaskItem } from "./TaskItem";

interface TaskListProps extends PropsFromRedux {
  tasks: ITask[];
}

const TaskList: FC<TaskListProps> = ({ tasks, removeTask, updateTask }) => {
  return (
    <>
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        ))}
      </div>
    </>
  );
};

function mapState(state: RootState) {
  return {
    tasks: state.tasksState.tasks,
  };
}
function mapDispatch(dispatch: Dispatch) {
  return bindActionCreators({ removeTask, updateTask }, dispatch);
}
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(TaskList);
