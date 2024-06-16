import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './app/navigation';
import AppScreen from './app/layout/AppScreen/AppScreen';
import Navigation from './app/navigation/navigator/Navigator';
import {StateProvider} from './app/services/auth/contexts';
import {RecoilRoot} from 'recoil';

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <RecoilRoot>
      <NavigationContainer ref={navigationRef}>
        <StateProvider>
          <AppScreen>
            <Navigation theme={navTheme} />
          </AppScreen>
        </StateProvider>
      </NavigationContainer>
    </RecoilRoot>
  );
};

export default App;
