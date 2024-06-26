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


export class Task {
  public static isTitleValid = (value: string) => {
    if (value.length < 2) {
      return 'Invalid title';
    }
    return true;
  };
  public static isDescriptionValid = (value: string) => {
    if (value.length < 10) {
      return 'Invalid description';
    }
    return true;
  };
  public static isCoverImageValid = (value: string) => {
    if (value.length < 1) {
      return 'Invalid Image';
    }
    return true;
  };
}
