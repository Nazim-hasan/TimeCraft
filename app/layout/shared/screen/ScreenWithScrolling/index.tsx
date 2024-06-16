import React, { useState, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


import { presets, offsets } from '../screen.presets';
import { ScreenProps } from '../types';
import { delay, isIOS } from 'services/helper/utils';

export const ScreenWithScrolling = ({
  style,
  backgroundColor,
  unsafe,
  keyboardOffset,
  keyboardShouldPersistTaps,
  children,
  disableKeyboardAvoid,
  stickyHeaderIndices,
  onScroll,
  scrollViewStyle,
  bounces = true,
  ...props
}: ScreenProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const preset = presets.scroll;
  const customStyle = style || {};
  const backgroundStyle = backgroundColor ? { backgroundColor } : {};
  const insetStyle = { paddingTop: unsafe ? 0 : insets.top };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    delay(2000).then(() => {
      setRefreshing(false);
    });
  }, []);

  return (
    <KeyboardAvoidingView
      style={[preset.outer]}
      behavior={isIOS() ? 'padding' : undefined}
      keyboardVerticalOffset={offsets[keyboardOffset || 'none']}
      enabled={!disableKeyboardAvoid}
    >
      <View style={[preset.outer, backgroundStyle, insetStyle]}>
        <ScrollView
          style={[preset.outer, backgroundStyle, scrollViewStyle]}
          contentContainerStyle={[preset.inner, customStyle]}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={stickyHeaderIndices}
          bounces={bounces}
          testID="screen-scroll-view"
          onScroll={onScroll}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          scrollEventThrottle={6}
          {...props}
        >
          {children}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};
