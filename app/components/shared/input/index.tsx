import React, {forwardRef, useCallback, useState} from 'react';
import {useRecoilState} from 'recoil';
import {
  ActivityIndicator,
  Keyboard,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {
  InputContainer,
  IconContainer,
  TextInputStyled,
  Container,
  ErrorMessage,
  SubmitButton,
  SubmitButtonLabel,
  SubmitButtonContainer,
  InputLabel,
  InputHint,
  SecureButton,
  EditIconContainer,
  EditText,
  LabelContainer,
  BottomInputStyled,
} from './styled';

import {IInputProps} from 'libs/shared/types/interfaces/common.interface';
import {delay} from 'services/helper/utils';
import {useFocusState} from 'services/hooks/useFocusState';
import {CancelIcon} from 'assets/icons/Cancel';
import {CircleCheckMarkIcon} from 'assets/icons/CircleCheckMark';
import {EyeCrossed} from 'assets/icons/EyeCrossed';
import {EyeIcon} from 'assets/icons/Eye';
import {LockGrayIcon} from 'assets/icons/LockGray';
import {EditIcon} from 'assets/icons/EditIcon';
import {textAtom} from 'libs/shared/data-access/atoms';
import {colors} from 'theme/colors';

export const Input = forwardRef<TextInput, IInputProps>(
  (
    {
      withoutEditText = false,
      renderInputIcon,
      buttonLabel,
      buttonColor,
      onBtnPress,
      errorMessage,
      groupName = '',
      onBlur,
      onFocus,
      onEndEditing,
      handleOnChange,
      inputLabel = '',
      inputLabelColor,
      value,
      required = false,
      disabled = false,
      isLoading = false,
      disabledButton = false,
      autoCapitalize = 'none',
      borderColor = '',
      inputHint = '',
      inputContainerStyle,
      inputStyle,
      isFieldEdited = false,
      onCancelPress,
      onApplyPress,
      showSecureIcon,
      secureTextEntry,
      buttonLabelColor,
      borderStyle,
      buttonContainerPaddingVertical,
      buttonContainerPaddingHorizontal,
      placeholderTextColor,
      isEditableIcon,
      tooltipData,
      labelFontSize,
      bottomSheetInput,
      ...restOfProps
    },
    ref,
  ) => {
    const [inputValue, setInputValue] = useRecoilState(
      textAtom({group: groupName}),
    );
    const [inputError, setInputError] = useRecoilState(
      textAtom({group: `${groupName}-error`}),
    );
    const {
      isFocused,
      onFocus: onFocusEvent,
      onBlur: onBlurEvent,
    } = useFocusState();

    const [isApplied, setIsApplied] = useState(false);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

    const handleInputFocus = (
      event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      onFocus?.(event);
      onFocusEvent(event);
    };

    const handeOnInputBlur = (
      event: NativeSyntheticEvent<TextInputFocusEventData>,
    ) => {
      onBlur?.(event);
      onBlurEvent(event);
    };

    const handleInputChange = (text: string) => {
      handleOnChange
        ? handleOnChange(text, setInputValue, setInputError)
        : setInputValue(text);
    };

    const handleBtnPress = () => {
      Keyboard.dismiss();
      onBtnPress && onBtnPress();
    };

    const handleApply = () => {
      setIsApplied(true);
      delay(100, onApplyPress)?.finally(() => setIsApplied(false));
    };

    const onSecurePress = () => {
      setIsSecureTextEntry(!isSecureTextEntry);
    };

    const requiredMark = required ? '*' : '';
    const isError = Boolean(errorMessage) || Boolean(inputError);

    useFocusEffect(
      useCallback(() => {
        return () => setInputError('');
      }, []),
    );

    return (
      <>
        {isLoading || isApplied ? (
          <ActivityIndicator />
        ) : (
          <Container disabled={disabled}>
            {Boolean(inputLabel) && (
              <LabelContainer>
                <InputLabel
                  color={inputLabelColor}
                  inputLabelFontSize={labelFontSize}
                  >{`${inputLabel}${requiredMark}`}</InputLabel>
              </LabelContainer>
            )}

            <InputContainer
              borderColor={borderColor}
              borderStyle={borderStyle}
              isFocused={isFocused}
              errorMessage={isError}
              style={inputContainerStyle}>
              {renderInputIcon && renderInputIcon(isFocused)}
              {bottomSheetInput ? (
                <BottomInputStyled
                  {...restOfProps}
                  value={value || inputValue}
                  onChangeText={handleInputChange}
                  onBlur={handeOnInputBlur}
                  onFocus={handleInputFocus}
                  onEndEditing={onEndEditing}
                  placeholderTextColor={placeholderTextColor}
                  autoCapitalize={autoCapitalize}
                  editable={!disabled}
                  style={inputStyle}
                  ref={ref}
                  secureTextEntry={isSecureTextEntry}
                />
              ) : (
                <TextInputStyled
                  {...restOfProps}
                  value={value || inputValue}
                  onChangeText={handleInputChange}
                  onBlur={handeOnInputBlur}
                  onFocus={handleInputFocus}
                  onEndEditing={onEndEditing}
                  placeholderTextColor={placeholderTextColor}
                  autoCapitalize={autoCapitalize}
                  editable={!disabled}
                  style={inputStyle}
                  ref={ref}
                  secureTextEntry={isSecureTextEntry}
                />
              )}

              {isFieldEdited && (
                <IconContainer width={45}>
                  <TouchableOpacity
                    onPress={onCancelPress}
                    style={{marginRight: 8}}>
                    <CancelIcon />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleApply}>
                    <CircleCheckMarkIcon />
                  </TouchableOpacity>
                </IconContainer>
              )}
              {Boolean(buttonLabel) && (
                <SubmitButtonContainer
                  paddingVertical={buttonContainerPaddingVertical}
                  paddingHorizontal={buttonContainerPaddingHorizontal}>
                  <SubmitButton
                    disabled={disabled || disabledButton}
                    color={buttonColor}
                    onPress={handleBtnPress}
                    testID="input-submit-button">
                    <SubmitButtonLabel buttonLabelColor={buttonLabelColor}>
                      {buttonLabel}
                    </SubmitButtonLabel>
                  </SubmitButton>
                </SubmitButtonContainer>
              )}
              {showSecureIcon && (
                <SecureButton onPress={onSecurePress} activeOpacity={1}>
                  {isSecureTextEntry ? <EyeCrossed /> : <EyeIcon />}
                </SecureButton>
              )}
              {Boolean(!buttonLabel) && disabled && (
                <IconContainer>
                  <LockGrayIcon fill={colors.lightGray} />
                </IconContainer>
              )}
              {isEditableIcon && (
                <EditIconContainer>
                  {!withoutEditText && <EditText>Edit</EditText>}
                  <EditIcon height={13} width={13} />
                </EditIconContainer>
              )}
            </InputContainer>

            {isError && (
              <ErrorMessage>{errorMessage || inputError}</ErrorMessage>
            )}
            {!isError && Boolean(inputHint) && (
              <InputHint>{inputHint}</InputHint>
            )}
          </Container>
        )}
      </>
    );
  },
);
