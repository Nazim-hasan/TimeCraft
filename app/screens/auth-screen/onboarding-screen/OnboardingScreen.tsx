import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {navigate} from 'services/helper/utils';
import {CommonRoutes} from 'libs/shared/types/enums';
import Container from 'layout/shared/Container';
import {images} from 'theme/images';
import Text from 'components/shared/text/Text';
import {colors} from 'theme/colors';
import {metrics} from 'theme/metrics';
import Button from 'components/shared/button/Botton';

const OnboardingScreen = () => {
  const handlePress = () => {
    navigate(CommonRoutes.SignIn);
  };
  return (
    <Container>
      <View
        style={{
          flex: 2,
        }}>
        <Image
          source={images.IntroImage1}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          marginHorizontal: metrics.spacing.xl,
        }}>
        <Text preset="headingBold" centered>
          Task Management & To-Do List
        </Text>
        <Text
          customStyles={{
            color: colors.lightGray,
            marginVertical: metrics.spacing.l,
          }}
          centered>
          This productive tool is designed to help you better manage your task
          project-wise conveniently!
        </Text>

        <Button title="Let's Start" onPress={handlePress} />
      </View>
    </Container>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
