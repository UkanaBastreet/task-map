import { FC } from "react";
import TaskList from "./TaskList";

interface TaskPageProps {}

const TaskPage: FC<TaskPageProps> = ({}) => {
  return (
    <>
      <div className="task-page">
        <TaskList />
      </div>
    </>
  );
};

export default TaskPage;
