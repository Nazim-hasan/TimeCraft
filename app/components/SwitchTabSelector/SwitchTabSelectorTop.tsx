import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, I18nManager, LayoutChangeEvent } from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Config from 'react-native-config';
import { ISwitchTabSelectorProps } from '@smartcrowd/types';
import { numberAtom, textAtom } from '@smartcrowd/data-access';
import {
  SwitchTabGenericStyleSheet,
  SwitchTabSelectorTopContainer,
  SwitchTabTopContainer,
  SwitchTabTopText,
  TabIconContainer,
  TopAnimationContainer,
  TopAnimationHorizontalLine,
  TopAnimationHorizontalLineContainer,
} from './styled';
import { useAuth } from '@smartcrowd/auth-provider';
import { LockTabClose, LockTabOpen } from '@smartcrowd/ui';

export const SwitchTabSelectorTop = React.memo(
  ({
    containerStyle = {},
    options = [],
    selectedColor = 'desaturatedBlue',
    fontSize = 12,
    returnObject = false,
    disabled = false,
    initial = -1,
    onPress,
    switchTabSelectorType,
    initialSwitchTabValue,
    propertyCount,
  }: ISwitchTabSelectorProps) => {
    const { asGuest, asOnboardingUser } = useAuth();

    // Recoil state management
    const setTabValue = useSetRecoilState(
      numberAtom({ group: `selectedTabOption-${switchTabSelectorType}` }),
    );
    const [sliderTabWidth, setSliderTabWidth] = useRecoilState(
      numberAtom({ group: 'sliderTabWidth' }),
    );
    const [switchTabSelector, setSwitchTabSelectorType] = useRecoilState(
      textAtom({ group: switchTabSelectorType }),
    );

    //Constants
    const propertyLabelOptions =
      Config['PLATFORM_NAME'] === 'KSA'
        ? options
        : [
            { ...options[0], count: propertyCount?.live || 0 },
            { ...options[1], count: propertyCount?.exited || 0 },
            { ...options[2], count: propertyCount?.funded || 0 },
          ];

    // Refs and state
    const sliderWidth = useRef(120);
    const [selected, setSelected] = useState(initial);
    const animatedXValue = useRef(new Animated.Value(15)).current;

    // Effects
    useEffect(() => {
      initialSwitchTabValue && setSwitchTabSelectorType(initialSwitchTabValue);
    }, [initialSwitchTabValue]);
    // Effects
    useEffect(() => {
      switchTabSelector === 'live' && handleAnimation(0);
    }, [switchTabSelector]);

    useEffect(() => {
      toggleItem(0);
    }, [sliderWidth]);

    // Animation logic
    const handleAnimation = (index: number) => {
      const toXValue = I18nManager.isRTL
        ? index === 0
          ? 2 * sliderWidth.current - 10
          : index === 1
          ? 1 * sliderWidth.current + 2
          : 15
        : index === 0
        ? 15
        : index === 1
        ? index * sliderWidth.current + 2
        : index * sliderWidth.current - 10;
      Animated.spring(animatedXValue, {
        toValue: toXValue,
        useNativeDriver: false,
      }).start();
    };

    // Toggle item handler
    const toggleItem = useCallback(
      (index: number, callOnPress = true) =>
        () => {
          if (options.length <= 1 || index === null || isNaN(index)) return;

          handleAnimation(index);
          const switchTabValue = options[index]?.value;
          if (callOnPress && onPress) {
            onPress?.(returnObject ? options[index] : switchTabValue);
          } else {
            typeof switchTabValue === 'string' &&
              setSwitchTabSelectorType(switchTabValue);
            setTabValue(index);
          }
          setSelected(index);
        },
      [selected],
    );

    // Layout change handler
    const onLayout = useCallback((event: LayoutChangeEvent) => {
      const { width } = event.nativeEvent.layout;
      if (width !== 0) {
        sliderWidth.current = width / 3;
        setSliderTabWidth(width / 3);
        Animated.spring(animatedXValue, {
          toValue: I18nManager.isRTL ? 2 * sliderWidth.current - 10 : 15,
          useNativeDriver: false,
        }).start();
        setSelected(0);
      } else {
        sliderWidth.current = sliderTabWidth;
      }
    }, []);

    // Rendering
    return (
      <SwitchTabSelectorTopContainer style={containerStyle} onLayout={onLayout}>
        <TopAnimationHorizontalLineContainer>
          <TopAnimationHorizontalLine />
        </TopAnimationHorizontalLineContainer>
        <TopAnimationContainer
          sliderWidth={sliderWidth.current - 5}
          style={[
            !I18nManager.isRTL
              ? SwitchTabGenericStyleSheet.engAlign
              : SwitchTabGenericStyleSheet.arabicAlign,
            {
              transform: [{ translateX: animatedXValue }],
            },
          ]}
        />
        {propertyLabelOptions?.map((element, index) => (
          <SwitchTabTopContainer
            key={element.value}
            disabled={disabled || element?.disabled}
            onPress={toggleItem(index)}
            testID={element.testID}
            sliderWidth={sliderWidth.current - 20}
          >
            <SwitchTabTopText
              selectedColor={selectedColor}
              fontSize={fontSize}
              isSelected={selected === index}
              isBold={Config['PLATFORM_NAME'] === 'KSA'}
            >
              {`${element?.label} ${
                Config['PLATFORM_NAME'] !== 'KSA' ? `(${element?.count})` : ''
              }`}
            </SwitchTabTopText>
            {(asGuest || asOnboardingUser) && (
              <TabIconContainer>
                {element?.label === 'Live' ? <LockTabClose /> : <LockTabOpen />}
              </TabIconContainer>
            )}
          </SwitchTabTopContainer>
        ))}
      </SwitchTabSelectorTopContainer>
    );
  },
);
