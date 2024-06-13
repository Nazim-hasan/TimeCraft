import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import { AuthStackParamList } from "../../models/NavigationModel";
// import { COLORS } from "colors";
const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"LoginScreen"}
        component={LoginScreen}
        options={{
          headerShown: false,
          title: 'Login'
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
