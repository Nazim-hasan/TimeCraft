import {View} from 'react-native';
import React from 'react';
import Text from 'components/shared/text/Text';
import {
  GreetingsWrapper,
  IconContainer,
  greetingStyles,
} from './styled';
import PlusIcon from 'assets/icons/Plus';
import {IGreetingProps} from './types';
import {useLoadableValue} from 'services/hooks/useLoadableValue';
import {todoSelector} from 'libs/shared/data-access/task/task.selector';
import {taskStatuses} from 'libs/shared/types/enums/todo.enums';
import { GreetingTimezone } from './greeting-timezone';

const Greeting = ({onPressAdd}: IGreetingProps) => {
  const todoList = useLoadableValue(todoSelector(taskStatuses.todo));

  return (
    <View>
      <GreetingsWrapper>
        <GreetingTimezone />
        <IconContainer onPress={onPressAdd}>
          <PlusIcon />
        </IconContainer>
      </GreetingsWrapper>
      <Text customStyles={greetingStyles.remainingTasks}>
        {todoList.data.length === 0
          ? 'You have no task to complete'
          : `You got ${todoList.data.length} task to complete`}
      </Text>
    </View>
  );
};

export default Greeting;
