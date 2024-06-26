import EmptyList from 'components/empty-list';
import MarkDone from 'components/mark-done';
import React, { useCallback } from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useRecoilRefresher_UNSTABLE, useRecoilState} from 'recoil';
import {ITaskListProps} from './types';
import {RefreshControl} from 'react-native';
import {todoSelector} from 'libs/shared/data-access/task/task.selector';
import {TodoCard} from 'components/todo-card';
import {ITaskResponse} from 'libs/shared/types/interfaces/task.interface';
import {useLoadableValue} from 'services/hooks/useLoadableValue';

const MySwipeListView = ({status}: ITaskListProps) => {
  const todoList = useLoadableValue(todoSelector(status));
  const refreshTodoList = useRecoilRefresher_UNSTABLE(todoSelector(status));

  const renderItem = (rowData: ITaskResponse) => (
    <TodoCard task={rowData.item} onRefresh={refreshTodoList}/>
  );

  const renderHiddenItem = (rowData: ITaskResponse) => (
    <MarkDone id={rowData.item.id} onRefresh={refreshTodoList}/>
  );
  const keyExtractor = (item: ITaskResponse) => item?.item?.id;
  const refreshControl = (
    <RefreshControl
      enabled={true}
      refreshing={todoList.isLoading}
      onRefresh={refreshTodoList}
    />
  );
  const listEmpty = !todoList.isLoading && (
    <EmptyList emptyNote="No tasks found" />
  );

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
    />
  );
};

export default MySwipeListView;
