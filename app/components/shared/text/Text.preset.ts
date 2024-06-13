import {getFontFamily} from '../../../utils/fontFamily';

const fontSizes = {
  xs: 9,
  sm: 12,
  body: 14,
  lg: 16,
  xl: 20,
  heading: 32,
};

export const presets = {
  body: {
    fontFamily: getFontFamily('normal'),
    fontSize: fontSizes.body,
  },
  regularXs: {
    fontFamily: getFontFamily('medium'),
    fontSize: fontSizes.xs,
  },
  RegularLg: {
    fontFamily: getFontFamily('bold'),
    fontSize: fontSizes.lg,
  },
};
