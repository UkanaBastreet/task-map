import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
  reducer: { tasksState: taskSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
