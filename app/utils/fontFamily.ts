import {fontFamilies} from '../constants/fonts';

export const getFontFamily = (weight: 'normal' | 'medium' | 'bold') => {
  const selectedFontFamily = fontFamilies.LEXENDDECA;
  return selectedFontFamily[weight];
};
