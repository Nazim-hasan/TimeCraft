import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './app/navigation';
import AppScreen from './app/layout/AppScreen/AppScreen';
import Navigation from './app/navigation/navigator/Navigator';
import {StateProvider} from './app/services/auth/contexts';
import {RecoilRoot} from 'recoil';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <GestureHandlerRootView>
      <RecoilRoot>
        <NavigationContainer ref={navigationRef}>
          <StateProvider>
            <AppScreen>
              <BottomSheetModalProvider>
                <Navigation theme={navTheme} />
              </BottomSheetModalProvider>
            </AppScreen>
          </StateProvider>
        </NavigationContainer>
      </RecoilRoot>
    </GestureHandlerRootView>
  );
};

export default App;
