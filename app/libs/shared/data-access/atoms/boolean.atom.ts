import { atomFamily } from 'recoil';

import { IStateGroupKey } from '@smartcrowd/types';

/**
 * Represents boolean state
 */
export const booleanAtom = atomFamily<boolean, IStateGroupKey>({
  key: 'booleanAtom',
  default: false,
});
