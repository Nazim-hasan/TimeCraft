import React from 'react';
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

const TodoCard = () => {
  const handleCardPress = () => {
    console.log('first card')
  }
  return (
    <TodoCardContainer onPress={handleCardPress}>
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
    </TodoCardContainer>
  );
};

export default TodoCard;
