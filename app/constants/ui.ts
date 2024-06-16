import { Dimensions, Platform, StatusBar } from "react-native";

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';
export const screenDimensions = Dimensions.get('screen');
export const statusBarHeight = StatusBar.currentHeight;
export const isMediumDevice = screenDimensions.height > 670;