import { NavigatorScreenParams } from "@react-navigation/native";
import { CommonRoutes } from "../libs/shared/types/enums/navigation.enum";


export type AuthStackParamList = {
  [CommonRoutes.SignIn]: undefined;
  [CommonRoutes.Intro]: undefined;
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