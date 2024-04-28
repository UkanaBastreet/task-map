import { FC } from "react";
import { ITask } from "../types/task";

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
        </div>
        <button onClick={() => removeTask(task.id)}>x</button>
      </div>
    </>
  );
};
