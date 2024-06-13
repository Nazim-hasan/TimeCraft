import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import {AppRootStackParamList} from '../../models/NavigationModel';

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
