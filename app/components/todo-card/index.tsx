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
import {ITaskProps} from './types';
import {format} from 'date-fns';

export const TodoCard = ({task}: ITaskProps) => {
  const customSheetRef = useRef<BottomSheetForwardRefType>(null);
  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
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
            {format(task?.dueDate, 'HH:MM dd MMM yyyy')}
          </Time>
          <Note numberOfLines={2}>{task?.description}</Note>
        </InfoContainer>
      </CardWrapper>
      <CustomBottomSheet ref={customSheetRef} title={task.title}>
        <TaskDetails taskDetails={task}/>
      </CustomBottomSheet>
    </TodoCardContainer>
  );
};

