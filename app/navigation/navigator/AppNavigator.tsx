import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRootStackParamList} from 'models/NavigationModel';
import HomeScreen from 'screens/home-screen/HomeScreen';
import {CommonRoutes, RootNavigators} from 'libs/shared/types/enums';
import {TabNavigator} from './TabNavigator';

const App = createNativeStackNavigator<AppRootStackParamList>();

const AppNavigator = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={CommonRoutes.Home}>
      <App.Screen name={RootNavigators.TabStack} component={TabNavigator} />
    </App.Navigator>
  );
};

export default AppNavigator;
