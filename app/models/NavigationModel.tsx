import { NavigatorScreenParams } from "@react-navigation/native";

export type AuthStackParamList = {
  LoginScreen: undefined
};

export type RootTabParamList = {
  
};

export type RootDrawerParamList = {
  ["TimeCraft"]: NavigatorScreenParams<RootTabParamList> | undefined; // Home
  // Support: undefined;
};

export type AppRootStackParamList = {
  Root: NavigatorScreenParams<RootDrawerParamList> | undefined;
  HomeScreen: undefined,
};