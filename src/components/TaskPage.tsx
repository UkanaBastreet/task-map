import { FC } from "react";
import TodoListContainer from "./hoc/TodoListContainer";
import TaskForm from "./TaskForm";

const TaskPage: FC = () => {
  return (
    <>
      <div className="task-page">
        <TodoListContainer />
        <TaskForm />
      </div>
    </>
  );
};

export default TaskPage;
