import React, {useCallback, useRef} from 'react';

import {Screen} from 'layout/shared/screen/Screen';
import Greeting from 'components/greeting';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import TodoSection from 'components/Todos';
import {HomeScreenStyles} from './Styled';
import CustomBottomSheet, {
  BottomSheetForwardRefType,
} from 'components/BottomSheet/custom-bottom-sheet';
import TodoForm from 'components/todo-form/todo-form';
import { useFocusEffect } from '@react-navigation/native';

const HomeScreen = () => {
  const customSheetRef = useRef<BottomSheetForwardRefType>(null);
  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
  }, []);

  const handleDismissModalPress = useCallback(() => {
    customSheetRef?.current?.closeSheet();
  }, []);

  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={HomeScreenStyles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}
      >
      <Greeting onPressAdd={handlePresentModalPress} />
      <TodoSection />
      <CustomBottomSheet ref={customSheetRef} title="Create new task" >
        <TodoForm handleSheetClose={handleDismissModalPress}/>
      </CustomBottomSheet>
    </Screen>
  );
};

export default HomeScreen;
