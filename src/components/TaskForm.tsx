import { FC, FormEvent, useState } from "react";
import { AppDispatch } from "../store/store";
import { ConnectedProps, connect } from "react-redux";
import { addTask } from "../store/taskSlice";
import { bindActionCreators } from "redux";

interface TaskFormProps extends PropsFromRedux {}

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

function mapDispatch(dispatch: AppDispatch) {
  return bindActionCreators({ addTask }, dispatch);
}
// function mapStateToProps(state: RootState) {}
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TaskForm);
