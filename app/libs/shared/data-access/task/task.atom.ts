import { ITaskResponse } from 'libs/shared/types/interfaces/task.interface';
import { atom } from 'recoil';


export const taskAtom = atom<Partial<ITaskResponse[]>>({
  key: 'taskAtom',
  default: [],
});
