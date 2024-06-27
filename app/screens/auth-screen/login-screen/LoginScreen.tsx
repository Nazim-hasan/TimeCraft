import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {loginFormDefaultValues} from 'libs/shared/mocks/auth.mock';
import {Screen} from 'layout/shared/screen/Screen';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {ScreenContent} from 'layout/shared/screen/ScreenContent';
import LoginForm from 'components/login-form/login-form';
import Button from 'components/shared/button/Botton';
import {colors} from 'theme/colors';
import {useAuthFunction} from 'services/auth/hooks';
import LottieView from 'lottie-react-native';
import {animatedIcons} from 'theme/animated-icons';
import {Slug, loginStyles} from './Login.styled';

const LoginScreen = () => {
  const loginForm = useForm({
    defaultValues: loginFormDefaultValues,
    mode: 'onChange',
  });
  const {handleLogin} = useAuthFunction();

  const handleLoginSubmit = () => {
    loginForm.handleSubmit(data => {
      handleLogin(data.email);
    })();
  };

  return (
    <FormProvider {...loginForm}>
      <Screen
        preset="scroll"
        scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
        stickyHeaderIndices={[1]}
        themeName={colors.white}
        bounces={false}>
        <ScreenContent>
          <LottieView
            style={loginStyles.svgStyles}
            source={animatedIcons.login}
            autoPlay
            loop
          />
          <Slug centered>Ready to make your day productive?</Slug>
          <LoginForm />
        </ScreenContent>
      </Screen>
      <Button
        title="Submit"
        onPress={handleLoginSubmit}
        disabled={!loginForm.formState.isValid}
        customStyles={loginStyles.buttonStyles}
      />
    </FormProvider>
  );
};

export default LoginScreen;
