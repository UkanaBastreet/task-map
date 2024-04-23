import { FC } from "react";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
  tasks: any[];
}

export const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <>
      <div>
        {tasks.map((task) => (
          <TaskItem key={task.id} />
        ))}
      </div>
    </>
  );
};
