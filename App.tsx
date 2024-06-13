import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {navigationRef} from './app/navigation';
import AppScreen from './app/layout/AppScreen/AppScreen';
import Navigation from './app/navigation/navigator/Navigator';
import {StateProvider} from './app/services/auth/contexts';

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <StateProvider>
        <AppScreen>
          <Navigation theme={navTheme} />
        </AppScreen>
      </StateProvider>
    </NavigationContainer>
  );
};

export default App;
