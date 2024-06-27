import { ITask } from "libs/shared/types/interfaces/task.interface";

export interface IMarkProps {
  taskInfo: ITask;
  onRefresh: () => void;
}