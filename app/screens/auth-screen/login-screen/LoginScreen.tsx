import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Text from 'components/shared/text/Text';
import {CommonRoutes} from 'libs/shared/types/enums';
import {navigate} from 'navigation';
import {FormProvider, useForm} from 'react-hook-form';
import {loginFormDefaultValues} from 'libs/shared/mocks/auth.mock';
import {Screen} from 'layout/shared/screen/Screen';
import {commonStyles} from 'libs/shared/ui/styleSheet';
import {loginStyles} from './Login.styled';
import {ScreenContent} from 'layout/shared/screen/ScreenContent';
import LoginForm from 'components/login-form/login-form';
import Button from 'components/shared/button/Botton';
import {images} from 'theme/images';
import {colors} from 'theme/colors';
import { storeData } from 'storage/asyncStore';
import { useAuthFunction } from 'services/auth/hooks';

const LoginScreen = () => {
  const loginForm = useForm({
    defaultValues: loginFormDefaultValues,
    mode: 'onChange',
  });
  const {handleLogin} = useAuthFunction();

  return (
    <FormProvider {...loginForm}>
      <Screen
        preset="scroll"
        scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
        stickyHeaderIndices={[1]}
        themeName={colors.white}
        bounces={false}>
        <ScreenContent>
          <Image
            source={images.loginBanner}
            style={{
              height: '70%',
              width: '100%',
            }}
            resizeMode="cover"
          />
          <Text
            centered
            customStyles={{
              marginTop: 10,
            }}>
            Ready to make your day productive?
          </Text>
          <LoginForm />
        </ScreenContent>
      </Screen>
      <Button
        title="Submit"
        onPress={() => {
          loginForm.handleSubmit(data => {
            console.log(data);
            
            handleLogin('userToken0010832');


          })();
        }}
      />
    </FormProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
