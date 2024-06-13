import {TextInput, StyleSheet, TextStyle, ViewStyle, View} from 'react-native';
import React from 'react';
import {Pressable} from 'react-native';
import {metrics} from '../../../theme/metrics';
import {colors} from '../../../theme/colors';

interface InputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  customStyles?: TextStyle | ViewStyle | TextStyle[] | ViewStyle[];
  onBlur?: () => void;

  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  multiline?: boolean;
  defaultValue?: string;
  value?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  setShowPassword?: (value: boolean) => void;
  buttonTextStyle?: TextStyle | ViewStyle | TextStyle[] | ViewStyle[];
}

export default function Input({
  placeholder,
  onChangeText,
  customStyles,
  onBlur,
  secureTextEntry,
  autoCapitalize,
  multiline,
  defaultValue,
  value,
  leftIcon,
  rightIcon,
  setShowPassword,
  buttonTextStyle,
}: InputProps) {
  const togglePassword = () => {
    setShowPassword && setShowPassword((current: boolean) => !current);
  };
  return (
    <View style={styles.inputContainer}>
      {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={[
          styles.input,
          customStyles,
          leftIcon ? {paddingLeft: 40} : {paddingLeft: metrics.spacing.sm},
          buttonTextStyle,
        ]}
        placeholderTextColor={colors.primary}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={multiline}
        defaultValue={defaultValue}
        value={value}
      />
      {rightIcon && (
        <Pressable
          onPress={() => {
            setShowPassword && togglePassword();
          }}
          style={styles.rightIconContainer}>
          {rightIcon}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    marginBottom: metrics.spacing.m,
    fontFamily: 'body',
  },
  input: {
    borderColor: colors.darkGray,
    borderWidth: 1,
    backgroundColor: colors.lightGray,
    paddingVertical: metrics.spacing.sm,
    color: colors.lightGray,
    marginBottom: metrics.spacing.xs,
    fontFamily: 'body',
    flex: 1,
    // Adjust this value to change the position of the text inside the TextInput
  },
  leftIconContainer: {
    position: 'absolute',
    zIndex: 10,
    top: metrics.spacing.m,
    left: metrics.spacing.s, // Adjust this value to change the position of the icon inside the TextInput
  },
  rightIconContainer: {
    position: 'absolute',
    zIndex: 10,
    top: metrics.spacing.m,
    right: metrics.spacing.s, // Adjust this value to change the position of the icon inside the TextInput
  },
});
