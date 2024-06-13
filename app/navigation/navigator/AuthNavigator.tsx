import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { CommonRoutes } from 'libs/shared/types/enums';
import { AuthStackParamList } from 'models/NavigationModel';
import OnboardingScreen from 'screens/auth-screen/onboarding-screen/OnboardingScreen';
import LoginScreen from 'screens/auth-screen/login-screen/LoginScreen';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={CommonRoutes.Intro}>
      <AuthStack.Screen
        name={CommonRoutes.Intro}
        options={{
          gestureEnabled: false,
        }}
        component={OnboardingScreen}
      />

      <AuthStack.Screen
        name={CommonRoutes.SignIn}
        component={LoginScreen}
        options={{
          title: 'Login',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
