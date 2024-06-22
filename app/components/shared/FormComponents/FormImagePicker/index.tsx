
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import ImagePicker from 'components/ImagePicker';
import { IFormImagePickerProps } from './types';

const FormImagePicker = ({
  fieldName
}: IFormImagePickerProps) => {

  const {control, formState} = useFormContext();
  return (
    <Controller
      render={({field}) => (
        <ImagePicker
          value={field.value}
          onSelect={(value: Date) => {
            field.onChange(value);
            field.onBlur();
          }}
        />
      )}
      control={control}
      name={fieldName}
      rules={{
        required: true,
      }}
    />
    
  )
}

export default FormImagePicker