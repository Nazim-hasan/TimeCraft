import MarkDone from 'components/mark-done';
import TodoCard from 'components/todo-card';
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

const MySwipeListView = () => {
  const [listViewData, setListViewData] = useState(
    Array(20)
      .fill('')
      .map((_, i) => ({key: `${i}`, text: `item #${i}`})),
  );

  const renderItem = data => <TodoCard />;

  const renderHiddenItem = () => <MarkDone />;

  return (
    <SwipeListView
      data={listViewData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      rightOpenValue={-100}
      disableRightSwipe
    />
  );
};

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
});

export default MySwipeListView;
