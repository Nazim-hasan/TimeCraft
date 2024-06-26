import {View, Text} from 'react-native';
import React, {Fragment, useState} from 'react';
import {IImagePickerProps} from './types';
import {
  ChoosePhoto,
  ChoosenPhoto,
  ChoosenPhotoWrapper,
  Container,
  InputContainer,
  Label,
  RemoveIconWrapper,
} from './styled';
import {getDocumentFile} from 'libs/shared/file';
import {PickDocumentType} from 'libs/shared/types/enums/common.enum';
import {Asset} from 'react-native-image-picker';
import {CloseIcon} from 'assets/icons/Close';

const ImagePicker = ({value, onSelect}: IImagePickerProps) => {
  const [selectedImage, setSelectedImage] = useState<void | Asset>();
  const handleSelectPhoto = async () => {
    const result = await getDocumentFile(PickDocumentType.IMAGE_LIBRARY);
    setSelectedImage(result);
    result && onSelect(result.uri);
  };
  const handleRemovePhoto = () => {
    setSelectedImage(undefined);
    onSelect(undefined);
  };

  return (
    <Container>
      {selectedImage ? (
        <ChoosenPhotoWrapper>
          <RemoveIconWrapper onPress={handleRemovePhoto}>
            <CloseIcon />
          </RemoveIconWrapper>
          <ChoosenPhoto
            source={{
              uri: selectedImage.uri,
            }}
          />
        </ChoosenPhotoWrapper>
      ) : (
        <Fragment>
          <Label>Thumbnail</Label>
          <InputContainer onPress={handleSelectPhoto}>
            <ChoosePhoto>Choose Photo</ChoosePhoto>
          </InputContainer>
        </Fragment>
      )}
    </Container>
  );
};

export default ImagePicker;
