import get from 'lodash/get';
import {
  Asset,
  launchImageLibrary,
  launchCamera,
} from 'react-native-image-picker';

import {checkCameraPermission} from './checkPermission';
import {PickDocumentType} from '../types/enums/common.enum';

export const getDocumentFile = async (
  type: PickDocumentType,
): Promise<Asset | void> => {
  switch (type) {
    case PickDocumentType.IMAGE_LIBRARY:
      // eslint-disable-next-line no-case-declarations
      const photoFromImageLibrary = await launchImageLibrary({
        mediaType: 'photo',
      });
      if (!photoFromImageLibrary?.didCancel) {
        return get(photoFromImageLibrary, 'assets[0]', {});
      }
      break;
    case PickDocumentType.CAMERA:
      {
        const cameraPermission = await checkCameraPermission();

        if (cameraPermission) {
          // eslint-disable-next-line no-case-declarations
          const imageFromCamera = await launchCamera({
            mediaType: 'photo',
            cameraType: 'back',
            maxHeight: 1760,
            maxWidth: 990,
          });
          if (!imageFromCamera?.didCancel) {
            return get(imageFromCamera, 'assets[0]', {});
          }
        }
      }
      break;
  }
};
