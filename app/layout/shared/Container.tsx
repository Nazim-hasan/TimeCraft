import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../theme/colors';

type ComponentProps = {
  children: React.ReactNode;
  customStyles?: StyleProp<ViewStyle>;
};

const Container = ({ children,customStyles }: ComponentProps) => {
  return (
    <SafeAreaView style={[styles.container, customStyles]}>
      {children}
    </SafeAreaView>
  )
}

export default Container

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  }
})