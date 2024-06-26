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
import {useFocusEffect, useRoute} from '@react-navigation/native';

export const TodoCard = ({task}: ITaskProps) => {
  const route = useRoute<TRoute>();
  const {savedReminder} = route.params || {};

  useFocusEffect(
    useCallback(() => {
      if (savedReminder?.id === task?.id) {
        handlePresentModalPress();
      }
    }, [savedReminder]),
  );

  const customSheetRef = useRef<BottomSheetForwardRefType>(null);
  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    customSheetRef?.current?.closeSheet();
  }, []);

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
          <Time customStyles={CardStyles.title}>
            {format(task?.dueDate, 'K:mm a dd MMM yyyy')}
          </Time>
          <Note numberOfLines={2}>{task?.description}</Note>
        </InfoContainer>
      </CardWrapper>
      <CustomBottomSheet
        ref={customSheetRef}
        title={task.title}
        snapPointArr={['50%']}>
        <TaskDetails
          taskDetails={task}
          handleSheetClose={handleDismissModalPress}
        />
      </CustomBottomSheet>
    </TodoCardContainer>
  );
};
