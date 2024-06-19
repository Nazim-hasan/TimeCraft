import {View, Text} from 'react-native';
import React from 'react';
import {SwitchTabSelector} from 'components/SwitchTabSelector';
import {TableKeys, TableType} from 'libs/shared/types/enums/table.enum';
import {TodoSwitchTabOptions} from './todo-options';

const TodoSection = () => {
  return (
    <SwitchTabSelector
      options={TodoSwitchTabOptions}
      switchTabSelectorType={TableType.todo}
      initialSwitchTabValue={TableKeys.todo}
      fontSize={12}
      withTourGuide
      animationDuration={0.5}
      // containerStyle={secondaryMarketStyle.container}
    />
  );
};

export default TodoSection;
