import {isIOS} from '../services/helper/utils';

export const fontFamilies = {
  LEXENDDECA: {
    normal: isIOS() ? 'LexendDeca-Regular' : 'LexendDecaRegular',
    medium: isIOS() ? 'LexendDeca-Medium' : 'LexendDecaMedium',
    bold: isIOS() ? 'LexendDeca-Bold' : 'LexendDecaBold',
  },
};
