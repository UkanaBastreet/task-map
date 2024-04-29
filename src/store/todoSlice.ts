import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../types/Todo";

const initialState = {
  todos: [
    {
      id: 1,
      isCompleted: true,
      text: "Learn React",
      date: Date.now(),
    },
  ] as ITodo[],
};

export const todoSlice = createSlice({
  name: "todoState",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = [...state.todos, action.payload];
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
