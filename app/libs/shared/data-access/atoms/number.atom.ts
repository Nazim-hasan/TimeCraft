import { atomFamily } from 'recoil';

import { IStateGroupKey } from '@smartcrowd/types';

/**
 * Represent single number
 */
export const numberAtom = atomFamily<number, IStateGroupKey>({
  key: 'numberAtom',
  default: 0,
});
