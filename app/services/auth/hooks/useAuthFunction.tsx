import { removeData, storeData} from '../../../storage/asyncStore';
import {showMessage} from 'react-native-flash-message';
import { useStateValue } from './useStateValue';
import notificationUtil from 'services/helper/notification-util';

const useAuthFunction = () => {
  const [{user, token, appSettings}, dispatch] = useStateValue();

  const handleLogin = (value: string) => {
    dispatch({
      type: 'SET_USER',
      user: true,
    });
    storeData(value);
    notificationUtil.checkPermissions();
  };

  const handleLogout = () => {
    dispatch({
      type: 'SET_USER',
      user: false,
    });
    removeData();
    showMessage({
      message: 'Logout',
      type: 'danger',
    });
  };

  return {handleLogout, handleLogin};
};

export default useAuthFunction;
