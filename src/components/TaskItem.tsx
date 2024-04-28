import { FC } from "react";
import { ITask } from "../types/task";
import Button from "./ui/Button/Button";

interface TaskItemProps {
  task: ITask;
  removeTask: (id: number) => void;
  updateTask: (task: ITask) => void;
}

export const TaskItem: FC<TaskItemProps> = ({
  task,
  removeTask,
  updateTask,
}) => {
  return (
    <>
      <div>
        <div>
          <h1
            style={{ textDecoration: task.isCompleted ? "line-through" : "" }}
          >
            {task.text}
          </h1>
          <span>{new Date(task.date).toDateString()}</span>
          <input
            checked={task.isCompleted}
            onChange={() =>
              updateTask({ ...task, isCompleted: !task.isCompleted })
            }
            type="checkbox"
            name=""
            id=""
          />
          <Button onClick={() => removeTask(task.id)}>x</Button>
        </div>
      </div>
    </>
  );
};
