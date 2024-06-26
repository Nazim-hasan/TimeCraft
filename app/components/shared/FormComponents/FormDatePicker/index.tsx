import React, {Fragment} from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import {IFormDatePickerProps} from './types';
import DatePicker from 'components/DatePicker';
import {
  DatePickerWrapper,
  DateRangeText,
  PickerContainer,
  PlaceholderText,
} from './styled';
import {format} from 'date-fns';

export const FormDatePicker = ({
  iconColor,
  rightIcon,
  containerStyle,
  fieldName,
  placeholderText,
  required,
}: IFormDatePickerProps) => {
  const {control, formState} = useFormContext();
  
  return (
    <Controller
      render={({field}) => (
        <DatePicker
          value={field.value}
          onSelect={(value: Date) => {
            field.onChange(value);
            field.onBlur();
          }}
          iconColor={iconColor}
          rightIcon={rightIcon}
          containerStyle={containerStyle}
          PickerComponent={
            <DatePickerWrapper>
              {placeholderText && (
                <PlaceholderText>
                  {placeholderText}
                  {required && '*'}
                </PlaceholderText>
              )}
              <PickerContainer>
                <DateRangeText>
                  {format(field.value, 'dd MMM yyyy HH:m:ss')}
                </DateRangeText>
              </PickerContainer>
            </DatePickerWrapper>
          }
        />
      )}
      control={control}
      name={fieldName}
      rules={{
        required: true,
      }}
    />
  );
};
