import { FC, FormEvent, useState } from "react";
import { ITask } from "../types/task";

interface TaskFormProps {
  addTask: (task: ITask) => void;
}

const TaskForm: FC<TaskFormProps> = ({ addTask }) => {
  const [text, setText] = useState("");

  function addTaskHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text !== "") {
      addTask({
        id: Date.now(),
        text: text.toString(),
        isCompleted: false,
        date: Date.now(),
      });
      setText("");
    }
  }
  return (
    <>
      <form onSubmit={addTaskHandler} className="task-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </>
  );
};

export default TaskForm;