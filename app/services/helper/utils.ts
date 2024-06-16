import {Platform} from 'react-native';
import {fontFamilies} from '../../constants/fonts';
import {createNavigationContainerRef} from '@react-navigation/native';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const delay = (ms: number, callback?: () => void) =>
  new Promise(resolve =>
    setTimeout(() => {
      //@ts-ignore
      resolve(callback?.() || true);
    }, ms),
  );

export const getFontFamily = (weight: 'normal' | 'medium' | 'bold') => {
  const selectedFontFamily = fontFamilies.LEXENDDECA;
  return selectedFontFamily[weight];
};
