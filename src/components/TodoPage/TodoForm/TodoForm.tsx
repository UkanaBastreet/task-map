import { FC, FormEvent, useState } from "react";
import { AppDispatch } from "../../../store/store";
import { ConnectedProps, connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "../../../store/todoSlice";

interface TodoFormProps extends PropsFromRedux {}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  function addTodoHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (text !== "") {
      addTodo({
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
      <form onSubmit={addTodoHandler} className="Todo-form">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your Todo name..."
        />
      </form>
    </>
  );
};

function mapDispatch(dispatch: AppDispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}
// function mapStateToProps(state: RootState) {}
const connector = connect(null, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(TodoForm);
