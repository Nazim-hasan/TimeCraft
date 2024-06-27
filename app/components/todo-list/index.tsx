import EmptyList from 'components/empty-list';
import MarkDone from 'components/mark-done';
import React, {useCallback} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useRecoilRefresher_UNSTABLE} from 'recoil';
import {ITaskListProps} from './types';
import {RefreshControl} from 'react-native';
import {todoSelector} from 'libs/shared/data-access/task/task.selector';
import {TodoCard} from 'components/todo-card';
import {
  ITask,
  ITaskResponse,
} from 'libs/shared/types/interfaces/task.interface';
import {useLoadableValue} from 'services/hooks/useLoadableValue';
import {useFocusEffect} from '@react-navigation/native';
import {taskStatuses} from 'libs/shared/types/enums/todo.enums';

const MySwipeListView = ({status}: ITaskListProps) => {
  const todoList = useLoadableValue(todoSelector(status));
  const refreshTodoList = useRecoilRefresher_UNSTABLE(todoSelector(status));

  useFocusEffect(
    useCallback(() => {
      refreshTodoList();
    }, [status]),
  );

  const renderItem = (rowData: ITaskResponse) => (
    <TodoCard task={rowData.item} />
  );

  const renderHiddenItem = (rowData: ITaskResponse) => (
    <MarkDone taskInfo={rowData.item} onRefresh={refreshTodoList} />
  );
  const keyExtractor = (item: ITask) => item?.id.toString();
  const refreshControl = (
    <RefreshControl
      enabled={true}
      refreshing={todoList.isLoading}
      onRefresh={refreshTodoList}
    />
  );
  const listEmpty = !todoList.isLoading ? (
    <EmptyList emptyNote="No tasks found" />
  ) : (
    <></>
  );

  const disableRightSwipe =
    status === taskStatuses.done || status === taskStatuses.removed;
  const disableLeftSwipe = status === taskStatuses.removed;

  return (
    //@ts-ignore
    <SwipeListView
      data={todoList.data}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-50}
      leftOpenValue={100}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={listEmpty}
      refreshControl={refreshControl}
      refreshing={todoList.isLoading}
      keyExtractor={keyExtractor}
      useNativeDriver
      useAnimatedList
      disableRightSwipe={disableRightSwipe}
      disableLeftSwipe={disableLeftSwipe}
    />
  );
};

export default MySwipeListView;
