import React from 'react';
import {
  InputContainer,
  LoginFormContainer,
  loginFormStyles,
} from './login-form.styled';
import {FormInputField} from 'components/shared/FormComponents';
import {colors} from 'theme/colors';
import {loginFieldNames} from 'libs/shared/types/enums/auth.enums';
import {User} from 'services/helper/user-util';
import { InputIcon } from 'components/shared/InputIcon';
import { LockFillIcon } from 'assets/icons/LockFill';

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <FormInputField
        containerStyle={loginFormStyles.containerStyle}
        inputContainerStyle={loginFormStyles.inputContainerStyle}
        inputLabel={'Email'}
        inputLabelColor={colors.lightGray}
        // placeholderTextColor={theme.color.shadeGray}
        name={loginFieldNames.email}
        placeholder={'Please enter email'}
        rules={{
          required: true,
          validate: User.isEmailValid,
        }}
        autoCapitalize="sentences"
        autoCorrect={false}
        nextInputName={loginFieldNames.password}
        focusNextOnSubmitEditing
      />
      <FormInputField
        containerStyle={loginFormStyles.containerStyle}
        // inputContainerStyle={loginFormStyles.inputContainerStyle}
        name={loginFieldNames.password}
        // placeholder={t('contactInfoScreen.createPassword')}
        rules={{
          required: true,
          validate: User.isPasswordValid,
        }}
        autoCorrect={false}
        isLoading={false}
        renderInputIcon={isFocused => (
          <InputIcon icon={<LockFillIcon focused={isFocused} />} />
        )}
        secureTextEntry
        showSecureIcon
        borderColor={colors.lightGray}
      />
    </LoginFormContainer>
  );
};

export default LoginForm;