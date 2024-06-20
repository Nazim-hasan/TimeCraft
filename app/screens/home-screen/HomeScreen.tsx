import {StyleSheet} from 'react-native';
import React from 'react';
import {useAuthFunction} from 'services/auth/hooks';
import {Screen} from 'layout/shared/screen/Screen';
import Greeting from 'components/greeting';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {metrics} from 'theme/metrics';
import TodoSection from 'components/Todos';

const HomeScreen = () => {
  const {handleLogout} = useAuthFunction();
  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={styles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}>
      <Greeting />

      <TodoSection />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: metrics.spacing.m,
    marginVertical: metrics.spacing.m,
  },
});
