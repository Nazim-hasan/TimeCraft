import {View, Text} from 'react-native';
import React from 'react';
import {Screen} from 'layout/shared/screen/Screen';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {TrashScreenStyles} from './styled';

const TrashScreen = () => {
  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={TrashScreenStyles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}>
      <Text>Trash Screen</Text>
    </Screen>
  );
};

export default TrashScreen;
