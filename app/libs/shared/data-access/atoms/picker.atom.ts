import { atomFamily } from 'recoil';

import { IStateGroupKey } from '@smartcrowd/types';

/**
 * Represent picker object
 */
export const pickerAtom = atomFamily<
  { value: string; label: string },
  IStateGroupKey
>({
  key: 'pickerAtom',
  default: { value: '', label: '' },
});
