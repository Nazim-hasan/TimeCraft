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
import {images} from 'theme/images';
import CustomBottomSheet, {BottomSheetForwardRefType} from 'components/BottomSheet/custom-bottom-sheet';
import TaskDetails from 'components/task-details';

const TodoCard = () => {
  const customSheetRef = useRef<BottomSheetForwardRefType>(null);
  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
  }, []);

  return (
    <TodoCardContainer onPress={handlePresentModalPress}>
      <CardWrapper>
        <ImageContainer>
          <TaskImage source={images.IntroImage1} resizeMode="stretch" />
        </ImageContainer>
        <InfoContainer>
          <Title>Confirm Friday night</Title>
          <Time customStyles={CardStyles.title}>16:00PM, 29-January-2024</Time>
          <Note customStyles={CardStyles.title}>Check with Kim & Alex</Note>
        </InfoContainer>
      </CardWrapper>
      <CustomBottomSheet ref={customSheetRef} title="Confirm Friday night" >
        <TaskDetails />
      </CustomBottomSheet>
    </TodoCardContainer>
  );
};

export default TodoCard;
