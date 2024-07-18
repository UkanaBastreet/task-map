import { FC } from "react";
import { Card } from "./ui/Card/Card";
import s from "./TaskList.module.css";

interface TaskItemProps {
  task: Task;
}
export interface Task {
  id: number;
  title: string;
  description?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <>
      <Card id={task.id.toString()} className={s.TaskItem}>
        <b>{task.title}</b>
        {task.description && <p>{task.description}</p>}
        <div className="Card__footer">
          <span>{task.status}</span>
          <span>{task.createdAt.toDateString()}</span>
        </div>
      </Card>
    </>
  );
};
