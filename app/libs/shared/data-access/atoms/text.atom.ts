import { atomFamily } from 'recoil';

import { IStateGroupKey } from '@smartcrowd/types';

/**
 * Represent single text
 */
export const textAtom = atomFamily<string, IStateGroupKey>({
  key: 'textAtom',
  default: '',
});
