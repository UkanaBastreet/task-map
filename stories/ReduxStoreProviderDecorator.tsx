import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ITask } from "../src/types/Todo";

const storybookReducer = createSlice({
  name: "taskState",
  initialState: {
    tasks: [
      {
        id: 1,
        isCompleted: true,
        text: "Learn React",
        date: Date.now(),
      },
    ] as ITask[],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks = state.tasks.concat(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, ...action.payload };
        }
        return task;
      });
    },
  },
});
export const stores = configureStore({
  reducer: {
    taskState: storybookReducer.reducer,
  },
});

export const ReduxStoreProviderDecorator = (Component: any) => {
  return (
    <Provider store={stores}>
      <Component />
    </Provider>
  );
};
