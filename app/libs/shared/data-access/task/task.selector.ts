import {
  ITask,
  ITaskResponse,
} from 'libs/shared/types/interfaces/task.interface';
import {selectorFamily} from 'recoil';
import {getTaskListFromDB} from 'storage/asyncStore';

/**
 * Selector for getting todo list based on status
 */
export const todoSelector = selectorFamily<ITask[], string>({
  key: 'todoSelector',
  get: status => async () => {
    const storedTaskList: ITask[] = await getTaskListFromDB();
    const todoTaskList = storedTaskList.length > 1 && storedTaskList.filter(
      (task: ITask) => task.status === status,
    );

    return todoTaskList || [];
  },
});
