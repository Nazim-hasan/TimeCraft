import React, {Fragment} from 'react';
import {Screen} from 'layout/shared/screen/Screen';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {TrashScreenStyles} from './styled';
import TodoList from 'components/todo-list';
import {taskStatuses} from 'libs/shared/types/enums/todo.enums';

const TrashScreen = () => {
  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={TrashScreenStyles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}>
      <Fragment>
        <TodoList status={taskStatuses.removed} />
      </Fragment>
    </Screen>
  );
};

export default TrashScreen;
