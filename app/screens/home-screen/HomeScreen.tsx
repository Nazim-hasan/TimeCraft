import React, { useCallback, useRef } from 'react';

import {Screen} from 'layout/shared/screen/Screen';
import Greeting from 'components/greeting';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import TodoSection from 'components/Todos';
import { HomeScreenStyles } from './Styled';
import EditTodo from 'components/EditTodo';
import CustomBottomSheet, { BottomSheetForwardRefType } from 'components/BottomSheet/custom-bottom-sheet';
import Text from 'components/shared/text/Text';

const HomeScreen = () => {

  const customSheetRef = useRef<BottomSheetForwardRefType>(null);
  const handlePresentModalPress = useCallback(() => {
    customSheetRef?.current?.activateSheet();
  }, []);
  const onCloseSheet = () => {
    customSheetRef?.current?.closeSheet();
  };

  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={HomeScreenStyles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}>
      <Greeting onPressAdd={handlePresentModalPress}/>

      <TodoSection />

      <CustomBottomSheet ref={customSheetRef}>
        <Text>Go</Text>
        {/* <BrandDetails onCloseSheet={onCloseSheet} brand={item} /> */}
      </CustomBottomSheet>

    </Screen>
  );
};

export default HomeScreen;


