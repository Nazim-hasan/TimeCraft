import React, {useCallback, useRef} from 'react';
import {
  CardStyles,
  CardWrapper,
  ImageContainer,
  InfoContainer,
  Note,
  TaskImage,
  Time,
  Title,
  TodoCardContainer,
} from './styled';
import CustomBottomSheet, {
  BottomSheetForwardRefType,
} from 'components/BottomSheet/custom-bottom-sheet';
import TaskDetails from 'components/task-details';
import {ITaskProps, TRoute} from './types';
import {format} from 'date-fns';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {navigate} from 'navigation';
import {CommonRoutes} from 'libs/shared/types/enums';
import {taskStatuses} from 'libs/shared/types/enums/todo.enums';

export const TodoCard = ({task, onRefresh}: ITaskProps) => {
  const route = useRoute<TRoute>();
  let {savedReminder} = route.params || {};

  useFocusEffect(
    useCallback(() => {
      if (savedReminder?.id === task?.id) {
        handlePresentModalPress();
        navigate(CommonRoutes.Home);
      }
    }, [savedReminder]),
  );

  const customSheetRef = useRef<BottomSheetForwardRefType>(null);
  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    customSheetRef?.current?.closeSheet();
    onRefresh();
  }, []);

  const isTaskRemoved = task?.status === taskStatuses.removed;
  return (
    <TodoCardContainer onPress={handlePresentModalPress}>
      <CardWrapper>
        <ImageContainer>
          {task?.coverImage && (
            <TaskImage
              source={{
                uri: task?.coverImage,
              }}
              resizeMode="stretch"
            />
          )}
        </ImageContainer>
        <InfoContainer>
          <Title numberOfLines={1}>{task?.title}</Title>
          <Note numberOfLines={2}>{task?.description}</Note>
          <Time customStyles={CardStyles.title}>
            {format(task?.dueDate, 'K:mm a dd MMM yyyy')}
          </Time>
        </InfoContainer>
      </CardWrapper>
      <CustomBottomSheet
        ref={customSheetRef}
        title={task.title}
        snapPointArr={isTaskRemoved ? ['40%'] : ['50%']}>
        <TaskDetails
          taskDetails={task}
          handleSheetClose={handleDismissModalPress}
        />
      </CustomBottomSheet>
    </TodoCardContainer>
  );
};
