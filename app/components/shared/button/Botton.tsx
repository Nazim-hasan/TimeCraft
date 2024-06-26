import React from 'react';
import {TouchableOpacity, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import Text from '../text/Text';
import {metrics} from '../../../theme/metrics';
import {colors} from '../../../theme/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  customStyles?: StyleProp<ViewStyle>;
  inactiveText?: boolean;
  smallTitle?: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  customStyles,
  smallTitle,
  icon,
  inactiveText,
  disabled
}) => {
  const onPressHandler = () => {
    !disabled && onPress();
  }
  return (
    <TouchableOpacity
      style={[
        styles.button,
        customStyles,
        icon && {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        disabled && {
          backgroundColor: colors.blueGray,
          opacity: 1,
        },
      ]}
      onPress={onPressHandler}>
      {icon && icon}
      <Text
        preset={smallTitle ? 'MediumSm' : 'SemiBoldLg'}
        customStyles={inactiveText ? {color: colors.primary} : styles.btnText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: metrics.spacing.s,
    paddingVertical: metrics.spacing.m,
    backgroundColor: colors.primary,
    borderRadius: metrics.spacing.s,
  },
  btnText: {
    color: colors.white,
    fontFamily: 'heading',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Button;
