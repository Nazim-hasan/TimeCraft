import {useFocusEffect} from '@react-navigation/native';
import EmptyList from 'components/empty-list';
import MarkDone from 'components/mark-done';
import TodoCard from 'components/todo-card';
import {taskAtom} from 'libs/shared/data-access/task/task.atom';
import {
  ITask,
  ITaskResponse,
} from 'libs/shared/types/interfaces/task.interface';
import React, {useCallback} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useRecoilState} from 'recoil';
import {getTaskListFromDB} from 'storage/asyncStore';

const MySwipeListView = ({listType}) => {
  const [todoList, setTodoList] = useRecoilState(taskAtom);

  const renderItem = (rowData: ITaskResponse) => (
    <TodoCard task={rowData.item} />
  );

  const renderHiddenItem = (data: any) => <MarkDone id={data.item.id} />;

  const getPrev = async () => {
    const storedTaskList = await getTaskListFromDB();
    const todoTaskList = storedTaskList.filter(
      (task: ITask) => task.status === listType,
    );
    setTodoList(todoTaskList);
  };

  useFocusEffect(
    useCallback(() => {
      getPrev();
    }, [listType]),
  );

  return (
    <SwipeListView
      data={todoList}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-50}
      leftOpenValue={100}
      showsVerticalScrollIndicator={false}
      useNativeDriver
      ListEmptyComponent={() => <EmptyList emptyNote="No tasks found" />}
    />
  );
};

export default MySwipeListView;
