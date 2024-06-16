import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { offsets, presets } from '../screen.presets';
import { ScreenProps } from '../types';
import { isIOS } from 'services/helper/utils';

export const ScreenWithoutScrolling = ({
  style,
  unsafe,
  disableKeyboardAvoid,
  keyboardOffset,
  children,
}: ScreenProps) => {
  const insets = useSafeAreaInsets();
  const customStyle = style || {};
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

  return (
    <KeyboardAvoidingView
      style={presets.fixed.outer}
      behavior={isIOS() ? 'padding' : undefined}
      enabled={!disableKeyboardAvoid}
      keyboardVerticalOffset={offsets[keyboardOffset || 'none']}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[presets.fixed.inner, customStyle, insetStyle]}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
