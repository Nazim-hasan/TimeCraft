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
} from './styled';
import {getDocumentFile} from 'libs/shared/file';
import {PickDocumentType} from 'libs/shared/types/enums/common.enum';
import {Asset} from 'react-native-image-picker';

const ImagePicker = ({value, onSelect}: IImagePickerProps) => {
  const [selectedImage, setSelectedImage] = useState<void | Asset>();
  const handleSelectPhoto = async () => {
    const result = await getDocumentFile(PickDocumentType.IMAGE_LIBRARY);
    setSelectedImage(result);
    result && onSelect(result.uri);
  };

  return (
    <Container>
      {selectedImage ? (
        <ChoosenPhotoWrapper>
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
