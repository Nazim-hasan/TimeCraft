import { RouteProp } from '@react-navigation/native';
import {ITask} from 'libs/shared/types/interfaces/task.interface';

export interface ITaskProps {
  task: ITask;
  onRefresh: () => void;
}

type TRouteParams = {
  savedReminder?: {
    reminder: string;
    date: Date;
    id: string;
  };
};

export type TRoute = RouteProp<{ params: TRouteParams }, 'params'>;