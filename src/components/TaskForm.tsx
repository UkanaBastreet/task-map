import { FC, FormEvent, useState } from "react";
import { Task } from "./TaskItem";
import Input from "./ui/Input/Input";
import Button from "./ui/Button/Button";

interface TaskFormProps {
  addTask: (task: Task) => void;
}

export const TaskForm: FC<TaskFormProps> = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [toggle, setToggle] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target: HTMLFormElement = e.target as HTMLFormElement;
    const data = new FormData(target);
    const taskText = data.get("task")?.toString();
    if (taskText && taskText.trim() !== "") {
      addTask({
        id: Date.now(),
        title: taskText,
        status: "open",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      setValue("");
    }
  }
  return (
    <div className="TaskForm__wrapper">
      {toggle ? (
        <form onSubmit={handleSubmit} className="TaskForm Card">
          <Input
            name="task"
            type="text"
            placeholder="Task name"
            value={value}
            onSubmit={console.log}
            onChange={(e) => setValue(e.target.value)}
            onBlur={(e) => {
              setValue("");
            }}
            autoComplete="off"
          />
          <Button secondary type="submit">
            +
          </Button>
        </form>
      ) : (
        <Button onClick={() => setToggle(true)}>Add New Task</Button>
      )}
    </div>
  );
};
