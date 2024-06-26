
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import ImagePicker from 'components/ImagePicker';
import { IFormImagePickerProps } from './types';

const FormImagePicker = ({
  fieldName,
  rules
}: IFormImagePickerProps) => {

  const {control, formState} = useFormContext();
  return (
    <Controller
      render={({field}) => (
        <ImagePicker
          value={field.value}
          onSelect={(value) => {
            field.onChange(value);
            field.onBlur();
          }}
        />
      )}
      control={control}
      name={fieldName}
      rules={rules}
    />
    
  )
}

export default FormImagePicker