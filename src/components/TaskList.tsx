import { FC } from "react";
import { Task, TaskItem } from "./TaskItem";
import s from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <div className={s.TaskList}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
};
