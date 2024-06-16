import { atomFamily, RecoilState } from 'recoil';

import { IStateGroupKey } from '@smartcrowd/types';

/**
 * Represents array state
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const arrayAtom = atomFamily<any[], IStateGroupKey>({
  key: 'arrayAtom',
  default: [],
});

/**
 * Helper method ( for Typescript )
 * @param groupParams
 */
export const getArrayAtomData = <T>(
  groupParams: IStateGroupKey,
): RecoilState<T[]> => arrayAtom(groupParams);
