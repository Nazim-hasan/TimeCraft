import React, {useEffect, useRef} from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import {IFormFieldProps} from './types';
import {Input} from '../input';
import {FormFieldContainer} from './styled';

export const FormInputField = ({
  name,
  onValid,
  validationLength,
  onBlur,
  rules,
  formatter,
  defaultValue = '',
  focusNextOnValid = false,
  focusNextOnSubmitEditing = false,
  nextInputName,
  containerStyle,
  isEditableIcon,
  ...restOfProps
}: IFormFieldProps) => {
  const {control, formState, trigger, watch, setFocus} = useFormContext();
  const value = watch(name);
  const focusTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    (async () => {
      const isValid = await trigger(name);
      if (isValid) {
        onValid?.();
        focusNextOnValid && focusNextInput();
      }
    })();
    return () => {
      focusTimeout.current && clearTimeout(focusTimeout.current);
    };
  }, [value, name, validationLength, trigger]);

  const onSubmitEditing = () => {
    focusNextOnSubmitEditing && focusNextInput();
  };

  const focusNextInput = () => {
    if (nextInputName) {
      focusTimeout.current = setTimeout(() => {
        setFocus(nextInputName);
      }, 100);
    }
  };

  return (
    <Controller
      render={({field}) => (
        <FormFieldContainer style={containerStyle}>
          <Input
            {...restOfProps}
            //@ts-ignore
            errorMessage={formState.errors[name]?.message}
            required={!!rules?.required || false}
            onBlur={event => {
              field.onBlur();
              onBlur?.(event);
            }}
            handleOnChange={text => {
              const formatted = formatter ? formatter(field.value, text) : text;
              field.onChange(formatted);
            }}
            value={field.value}
            ref={field.ref}
            onSubmitEditing={onSubmitEditing}
            isEditableIcon={isEditableIcon}
          />
        </FormFieldContainer>
      )}
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
};
