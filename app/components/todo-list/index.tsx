import MarkDone from 'components/mark-done';
import TodoCard from 'components/todo-card';
import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';

const MySwipeListView = () => {
  const listViewData= 
    Array(20)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `item #${i}`}));

  const renderItem = (data: any) => <TodoCard />;

  const renderHiddenItem = () => <MarkDone />;

  return (
    <SwipeListView
      data={listViewData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-50}
      leftOpenValue={100}
      showsVerticalScrollIndicator={false}
    />
  );
};


export default MySwipeListView;
