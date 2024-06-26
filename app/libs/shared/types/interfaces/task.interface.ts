import { taskStatuses } from "../enums/todo.enums";

export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  coverImage: string;
  status: taskStatuses;
}
export interface ITaskResponse {
    index: number;
    item: ITask;
}

export interface ITaskInfo {
  rowData: ITaskResponse
}