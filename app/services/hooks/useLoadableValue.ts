import {ILoadableValue} from 'libs/shared/types/interfaces/common.interface';
import {RecoilValue, useRecoilValueLoadable} from 'recoil';

/**
 * Abstract the work with Recoil's loadable.
 * Return either the data or the loading information.
 */
export const useLoadableValue = <T>(
  originValue: RecoilValue<T>,
): ILoadableValue<T> => {
  const loadable = useRecoilValueLoadable(originValue);

  const isLoading = loadable.state === 'loading';
  const isError = loadable.state === 'hasError';

  return {
    data: loadable?.contents,
    isLoading,
    isError,
  };
};
