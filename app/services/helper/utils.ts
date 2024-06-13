import {Platform} from 'react-native';
import {fontFamilies} from '../../constants/fonts';
import {createNavigationContainerRef} from '@react-navigation/native';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const getFontFamily = (weight: 'normal' | 'medium' | 'bold') => {
  const selectedFontFamily = fontFamilies.LEXENDDECA;
  return selectedFontFamily[weight];
};

export const navigationRef = createNavigationContainerRef();

interface NavigationParams {
  [key: string]: any;
}

export function navigate(name: string, params?: NavigationParams) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
}
