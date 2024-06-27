import { ITask } from "libs/shared/types/interfaces/task.interface";

export interface ITaskDetailsProps {
  taskDetails: ITask;
  handleSheetClose: () => void;
}