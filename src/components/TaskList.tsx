import { FC } from "react";
import { Task, TaskItem } from "./TaskItem";
import s from "./TaskList.module.css";

interface TaskListProps {
  tasks: Task[];
}

const TodoList: FC<TodoListProps> = ({ tasks, removeTask, updateTask }) => {
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
export default TodoList;
