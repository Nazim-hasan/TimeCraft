import {View, Text} from 'react-native';
import React from 'react';
import {Screen} from 'layout/shared/screen/Screen';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {Message, TrashScreenStyles} from './styled';
import LottieView from 'lottie-react-native';
import {animatedIcons} from 'theme/animated-icons';

const TrashScreen = () => {
  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={TrashScreenStyles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}>
      <LottieView
        style={commonStyles.lottieLgContainer}
        source={animatedIcons.empty}
        autoPlay
        loop
      />
      <Message>Nothing's found in Trash</Message>
    </Screen>
  );
};

export default TrashScreen;
