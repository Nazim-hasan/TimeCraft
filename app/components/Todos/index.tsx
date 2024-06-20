import {View, Text} from 'react-native';
import React from 'react';
import {SwitchTabSelector} from 'components/SwitchTabSelector';
import {TableKeys, TableType} from 'libs/shared/types/enums/table.enum';
import {TodoSwitchTabOptions} from './todo-options';
import { useRecoilValue } from 'recoil';
import { textAtom } from 'libs/shared/data-access/atoms';
import TodoList from 'components/todo-list';

const TodoSection = () => {
  const tabOption = useRecoilValue(
    textAtom({ group: TableType.todo }),
  );
  return (
    <React.Fragment>
      <SwitchTabSelector
      options={TodoSwitchTabOptions}
      switchTabSelectorType={TableType.todo}
      initialSwitchTabValue={TableKeys.todo}
      fontSize={12}
      withTourGuide
      animationDuration={0.5}
      // containerStyle={secondaryMarketStyle.container}
    />
    
    {
      tabOption === TableKeys.todo ? (
        <TodoList />
      ) : null
    }
    </React.Fragment>

  );
};

export default TodoSection;
