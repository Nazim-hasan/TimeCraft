import React from 'react';
import LottieView from 'lottie-react-native';
import {animatedIcons} from 'theme/animated-icons';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {Container, Message} from './styled';
import {IEmptyListProps} from './types';

const EmptyList = ({emptyNote}: IEmptyListProps) => {
  return (
    <Container>
      <LottieView
        style={commonStyles.lottieLgContainer}
        source={animatedIcons.empty}
        autoPlay
        loop
      />
      <Message>{emptyNote}</Message>
    </Container>
  );
};

export default EmptyList;
