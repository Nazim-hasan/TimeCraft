import { ITask } from "libs/shared/types/interfaces/task.interface";

export const modifyTask = (taskList: ITask[], id: string, status: string) => {
  return taskList.map(task => {
    if (task.id === id) {
      return {
        ...task,
        status: status,
      };
    }
    return task;
  });
};