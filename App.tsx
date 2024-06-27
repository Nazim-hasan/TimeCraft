import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './app/navigation';
import AppScreen from './app/layout/AppScreen/AppScreen';
import Navigation from './app/navigation/navigator/Navigator';
import {StateProvider} from './app/services/auth/contexts';
import {RecoilRoot} from 'recoil';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {LogBox} from 'react-native';

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  // Ignore log notification by message
  LogBox.ignoreLogs([
    // Exact message
    'Warning: componentWillReceiveProps has been renamed',

    // Substring or regex match
    /GraphQL error: .*/,
  ]);

  // Ignore all log notifications
  LogBox.ignoreAllLogs();

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
