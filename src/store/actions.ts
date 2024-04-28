import { ITask } from "../types/task";

const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const REMOVE_TASKS = "REMOVE_TASKS";

export const addTaskAC = (task: ITask) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTaskAC = (task: ITask) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const removeTasksAC = () => ({
  type: REMOVE_TASKS,
});
