import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: { todoState: todoSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
