import { FC } from "react";
import { ITask } from "../types/task";
import { TaskItem } from "./TaskItem";

interface TodoListProps {
  removeTask: (id: number) => void;
  updateTask: (task: ITask) => void;
  tasks: ITask[];
}

const TodoList: FC<TodoListProps> = ({ tasks, removeTask, updateTask }) => {
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
export default TodoList;
