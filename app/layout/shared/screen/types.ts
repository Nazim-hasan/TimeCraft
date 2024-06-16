import React from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';


import { KeyboardOffsets, ScreenPresets } from './screen.presets';

export interface ScreenProps {
  /**
   * Children components.
   */
  children?: React.ReactNode;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * One of the different types of presets.
   */
  preset?: ScreenPresets;

  /**
   * An optional background color
   */
  backgroundColor?: string;

  /**
   * Should we not wrap in SafeAreaView? Defaults to false.
   */
  unsafe?: boolean;

  /**
   * Should scroll view bounce during refreshing
   */
  bounces?: boolean;

  /**
   * By how much should we offset the keyboard? Defaults to none.
   */
  keyboardOffset?: KeyboardOffsets;

  /**
   * Theme name for container
   */
  themeName?: string;

  /**
   * Controlling showing / hiding header on screen
   */
  withHeader?: boolean;


  /**
   * Scroll View Style
   */
  scrollViewStyle?: ViewStyle;

  /**
   * Should keyboard persist on screen tap. Defaults to handled.
   * Only applies to scroll preset.
   */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  disableKeyboardAvoid?: boolean;
  stickyHeaderIndices?: Array<number>;

  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;

  nestedScrollEnabled?: boolean;
}
