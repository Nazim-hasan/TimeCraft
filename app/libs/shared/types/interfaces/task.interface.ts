export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  coverImage: string;
  status: 'todo' | 'completed' | 'deleted';
}
export interface ITaskResponse {
    index: number;
    item: ITask;
}