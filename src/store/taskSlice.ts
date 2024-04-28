import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITask } from "../types/task";

const initialState = {
  tasks: [
    {
      id: 1,
      isCompleted: true,
      text: "Learn React",
      date: Date.now(),
    },
  ] as ITask[],
};

export const taskSlice = createSlice({
  name: "tasksState",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      console.log(action.payload);
      state.tasks = [...state.tasks, action.payload];
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
      console.log(action.payload);
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    },
  },
});

export const { addTask, removeTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
