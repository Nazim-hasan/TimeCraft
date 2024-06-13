import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppRootProps} from './types';

const AppScreen = ({children}: AppRootProps) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default AppScreen;
