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

export const getGreetingTime = (): string => {
  const currentHour = new Date().getHours();
  if (currentHour >= 5 && currentHour < 12) {
    return 'Morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Afternoon';
  } else {
    return 'Evening';
  }
};

export const getNameFromEmail = (email: string): string => {
  const [name] = email.split('@');
  return name;
}
