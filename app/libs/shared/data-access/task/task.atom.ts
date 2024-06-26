import { ITask } from 'libs/shared/types/interfaces/task.interface';
import { atom } from 'recoil';


export const taskAtom = atom<Partial<ITask[]>>({
  key: 'taskAtom',
  default: [],
});
