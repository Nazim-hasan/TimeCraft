import {AuthContextProps} from '../contexts/stateContext';

const reducer = (state: AuthContextProps, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      if (action.user !== undefined) {
        return {
          ...state,
          user: action.user,
        };
      }
      return state;

    case 'SET_REFRESH':
      return {
        ...state,
        refresh: action.refresh,
      };

    default:
      return state;
  }
};

export default reducer;
