import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AppRootStackParamList } from 'models/NavigationModel';
import HomeScreen from 'screens/home-screen/HomeScreen';

const Stack = createNativeStackNavigator<AppRootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      {/* <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false
        }}
      /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
