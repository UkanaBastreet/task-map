import { FC } from "react";
import TaskForm from "../TaskForm";
import TaskContextProvider, {
  TaskContextProps,
} from "../hoc/TaskContextProvider";
import TaskList from "../TaskList";

interface TaskPageProps extends TaskContextProps {}

const TaskPage: FC<TaskPageProps> = ({
  tasks,
  addTask,
  removeTask,
  updateTask,
}) => {
  return (
    <>
      <div className="task-page">
        <TaskList
          tasks={tasks}
          removeTask={removeTask}
          updateTask={updateTask}
        />
        <TaskForm addTask={addTask} />
      </div>
    </>
  );
};

export default TaskContextProvider(TaskPage);
