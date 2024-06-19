import { getFontFamily } from "../../../services/helper/utils";

const fontSizes = {
  xs: 9,
  sm: 12,
  body: 14,
  lg: 16,
  xl: 20,
  xxl: 24,
  heading: 28,
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
  RegularXl: {
    fontFamily: getFontFamily('medium'),
    fontSize: fontSizes.xl,
  },
  headingBold: {
    fontFamily: getFontFamily('bold'),
    fontSize: fontSizes.heading,
  },
};
