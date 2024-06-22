import {isIos} from 'constants/ui';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

export const checkPermission = async (): Promise<boolean> => {
  if (isIos || Number(Platform.Version) >= 33) {
    return true;
  } else {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS['READ_EXTERNAL_STORAGE'],
      PermissionsAndroid.PERMISSIONS['WRITE_EXTERNAL_STORAGE'],
    ]);

    const isGranted =
      granted[PermissionsAndroid.PERMISSIONS['READ_EXTERNAL_STORAGE']] ===
        'granted' &&
      granted[PermissionsAndroid.PERMISSIONS['WRITE_EXTERNAL_STORAGE']] ===
        'granted';

    if (isGranted) {
      return true;
    } else {
      Alert.alert('Error', 'Storage Permission Not Granted');
      return false;
    }
  }
};

export const checkCameraPermission = async (): Promise<boolean> => {
  if (isIos) {
    return true;
  } else {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  }
};
