import { atomFamily, RecoilState } from 'recoil';
import { IStateGroupKey } from '@smartcrowd/types';

/**
 * Represents an object state
 */
export const objectAtom = atomFamily<Record<string, any>, IStateGroupKey>({
  key: 'objectAtom',
  default: {},
});

/**
 * Helper method (for TypeScript)
 * @param groupParams
 */
export const getObjectAtomData = <T>(
  groupParams: IStateGroupKey,
): RecoilState<Record<string, T>> => objectAtom(groupParams);
