import styled from 'styled-components/native';
import { Animated, ScrollView, StyleSheet } from 'react-native';
import toNumber from 'lodash/toNumber';

// import { ISwitchTabSelectorStyledProps } from '@smartcrowd/types';
// import { wp } from '@smartcrowd/responsive-dimenssion';
import { ISwitchTabSelectorStyledProps } from 'libs/shared/types/interfaces/switchTabSelector.interface';
import { wp } from 'services/helper/responsive-dimenssion';
import { colors } from 'theme/colors';

export const SwitchTabSelectorContainer = styled.View`
  flex-direction: row;
  margin: 20px 0;
`;

export const SwitchTabSelectorLayout = styled.View<ISwitchTabSelectorStyledProps>`
  border-radius: ${({ borderRadius = 50 }) => borderRadius}px;
  background-color: ${({ theme, backgroundColor = 'white' }) => backgroundColor };
  height: ${({ height = 40, buttonMargin = 0 }) =>
    toNumber(height) + buttonMargin * 2}px;
`;

export const SwitchTabContainer = styled.View<ISwitchTabSelectorStyledProps>`
  flex: 1;
  align-items: center;
  flex-direction: row;
  border-color: ${({ theme }) => colors.darkGray};
  border-radius: ${({ borderRadius = 50 }) => borderRadius}px;
  border-width: ${({ hasPadding = false, borderWidth }) =>
    hasPadding ? borderWidth : 0}px;
`;

export const SwitchTabAnimatedContainer = styled(
  Animated.View,
)<ISwitchTabSelectorStyledProps>`
  border-width: 0;
  position: absolute;
  height: ${({
    hasPadding = false,
    height = 40,
    valuePadding = 1,
    borderWidth = 1,
  }) =>
    hasPadding
      ? toNumber(height) - valuePadding * 2 - borderWidth * 2
      : height}px;
  background-color: ${({ theme, activeColor = 'black' }) =>
  activeColor};
  border-radius: ${({ borderRadius = 50 }) => borderRadius}px;
  width: ${({
    sliderWidth = 0,
    optionsLength = 0,
    hasPadding = false,
    valuePadding = 1,
    buttonMargin = 0,
  }) =>
    sliderWidth / optionsLength -
    ((hasPadding ? valuePadding : 0) + buttonMargin * 2)}px;
  margin: ${({ buttonMargin = 0 }) => buttonMargin}px;
`;

export const SwitchTabText = styled.Text<ISwitchTabSelectorStyledProps>`
  font-size: ${({ fontSize = 14 }) => fontSize}px;
  text-align: center;
  color: ${({ theme, isSelected, selectedColor = 'white' }) =>
    //@ts-ignore
    isSelected ? selectedColor : colors.primary};
  max-width: 90%;
`;

export const SwitchTab = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

// Top Tab
export const SwitchTabSelectorTopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;

export const SwitchTabTopContainer = styled.TouchableOpacity<ISwitchTabSelectorStyledProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 50px;
  padding-top: 8px;
  width: ${({ sliderWidth = 110 }) => sliderWidth}px;
`;

export const SwitchTabTopText = styled.Text<ISwitchTabSelectorStyledProps>`
  font-size: ${({ fontSize = 12 }) => fontSize}px;
  text-align: center;
  color: ${({ theme }) => theme.color.mediumGray};
  font-family: ${({ theme, isBold }) =>
    isBold
      ? theme.typography.MontserratBold
      : theme.typography.MontserratSemiBold};
  max-width: 90%;
`;

export const TopAnimationHorizontalLineContainer = styled.View`
  position: absolute;
  bottom: 0px;
  height: 4px;
  width: 100%;
  align-items: center;
`;
export const TopAnimationHorizontalLine = styled.View`
  background-color: ${({ theme }) => theme.color.paleGray};
  height: 4px;
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const TopAnimationContainer = styled(Animated.View)`
  position: absolute;
  bottom: 0px;
  background-color: ${({ theme }) => theme.color.primary};
  height: 4px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: ${({ sliderWidth = 110 }) => sliderWidth}px;
`;

//Top Generic Tab
export const SwitchTabSelectorGenericContainer = styled.ScrollView<ScrollView>``;
export const SwitchTabGeneric = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 20px 4px 10px 4px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const SwitchTabGenericText = styled.Text<ISwitchTabSelectorStyledProps>`
  font-size: ${({ fontSize = 14 }) => fontSize}px;
  text-align: center;
  color: ${({ theme, isSelected, selectedColor }) =>
    isSelected ? selectedColor : colors.primary};
  font-family: ${({ theme, isBold }) =>
    isBold
      ? theme.typography.MontserratBold
      : theme.typography.MontserratMedium};
`;

export const AnimationContainer = styled(Animated.View)`
  position: absolute;
  bottom: 0px;
  background-color: ${({ theme }) => theme.color.primary};
  height: 3.5px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const AnimationHorizontalLineContainer = styled.View`
  position: absolute;
  bottom: 0px;
  height: 3.5px;
  width: 100%;
  align-items: center;
  padding-left: 20px;
`;
export const AnimationHorizontalLine = styled.View`
  background-color: ${({ theme }) => theme.color.lightGray2};
  height: 3.5px;
  width: 100%;
`;

export const SwitchTabGenericStyleSheet = StyleSheet.create({
  engAlign: {
    left: 0,
  },
  arabicAlign: {
    right: 0,
  },
});

// Circle tab design

export const SwitchTabSelectorCircleContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 100%;
`;
export const CircleAnimationHorizontalLineContainer = styled.View<ISwitchTabSelectorStyledProps>`
  width: ${wp(70)}px;
  align-items: center;
`;
export const CircleAnimationHorizontalLine = styled.View`
  position: absolute;
  top: 18.75px;
  bottom: auto;
  background-color: ${({ theme }) => theme.color.secondaryLightGray};
  height: 2.5px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
export const CircleAnimationContainer = styled(Animated.View)`
  position: absolute;
  background-color: ${({ theme }) => theme.color.primary};
  height: 41px;
  width: 41px;
  border-radius: 25px;
`;

export const SwitchTabCircleTextContainer = styled.View`
  flex-direction: row;
`;
export const SwitchTabCircleContainer = styled.TouchableOpacity<ISwitchTabSelectorStyledProps>`
  align-items: center;
  justify-content: center;
  width: ${({ sliderWidth }) => sliderWidth}px;
`;

export const IconContainer = styled.View`
  /* background-color: ${({ theme }) => colors.primary}; */
  height: 41px;
  width: 41px;
  border-width: 2px;
  border-color: ${({ isSelected, theme }) =>
    isSelected ? colors.primary : colors.lightGray};
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;
export const SwitchTabCircleText = styled.Text<ISwitchTabSelectorStyledProps>`
  font-size: ${({ fontSize = 9 }) => fontSize}px;
  text-align: center;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary : theme.color.primaryLightGray};
  font-family: ${({ theme, isBold }) =>
    isBold
      ? theme.typography.MontserratBold
      : theme.typography.MontserratSemiBold};
  max-width: 90%;
`;

export const TabIconContainer = styled.View`
  margin-left: 8px;
`;
