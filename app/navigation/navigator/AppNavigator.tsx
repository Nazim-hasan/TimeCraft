import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRootStackParamList} from 'models/NavigationModel';
import HomeScreen from 'screens/home-screen/HomeScreen';
import {CommonRoutes} from 'libs/shared/types/enums';

const App = createNativeStackNavigator<AppRootStackParamList>();

const AppNavigator = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={CommonRoutes.Home}>
      <App.Screen name={CommonRoutes.Home} component={HomeScreen} />
    </App.Navigator>
  );
};

export default AppNavigator;
