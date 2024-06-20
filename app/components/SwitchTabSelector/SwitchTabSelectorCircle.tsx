import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, I18nManager, LayoutChangeEvent } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { ISwitchTabSelectorProps } from '@smartcrowd/types';
import {
  CircleAnimationContainer,
  CircleAnimationHorizontalLine,
  CircleAnimationHorizontalLineContainer,
  IconContainer,
  SwitchTabCircleContainer,
  SwitchTabCircleText,
  SwitchTabCircleTextContainer,
  SwitchTabGenericStyleSheet,
  SwitchTabSelectorCircleContainer,
} from './styled';
import { useTheme } from 'styled-components';
import { numberAtom, textAtom } from 'libs/shared/data-access/atoms';
import { colors } from 'theme/colors';

export const SwitchTabSelectorCircle = React.memo(
  ({
    containerStyle = {},
    options = [],
    selectedColor = 'desaturatedBlue',
    returnObject = false,
    disabled = false,
    initial = -1,
    onPress,
    switchTabSelectorType,
    initialSwitchTabValue,
  }: ISwitchTabSelectorProps) => {
    const theme = useTheme();
    // Recoil state management
    const setTabValue = useSetRecoilState(
      numberAtom({ group: `selectedTabOption-${switchTabSelectorType}` }),
    );
    const setSwitchTabSelectorType = useSetRecoilState(
      textAtom({ group: switchTabSelectorType }),
    );

    //Constants
    const labelOptions = options;

    // Refs and state
    const sliderWidth = useRef(I18nManager.isRTL ? 110 : 120);
    const [selected, setSelected] = useState(initial);
    const animatedXValue = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;

    // Effects
    useEffect(() => {
      initialSwitchTabValue && setSwitchTabSelectorType(initialSwitchTabValue);
    }, [initialSwitchTabValue]);

    useEffect(() => {
      toggleItem(0);
    }, [sliderWidth]);

    // Animation logic
    const handleAnimation = (index: number) => {
      const toXValue = I18nManager.isRTL
        ? index === 0
          ? 2 * sliderWidth.current
          : index === 1
          ? 1 * sliderWidth.current
          : 0
        : index === 0
        ? 0
        : index === 1
        ? index * sliderWidth.current
        : index * sliderWidth.current;

      Animated.timing(scaleValue, {
        toValue: 0.3,
        duration: 100,
        useNativeDriver: false,
      }).start(() =>
        Animated.timing(animatedXValue, {
          toValue: toXValue,
          duration: 100,
          useNativeDriver: false,
        }).start(() =>
          Animated.timing(scaleValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: false,
          }).start(),
        ),
      );
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
      sliderWidth.current = width / 3;
      Animated.spring(animatedXValue, {
        toValue: I18nManager.isRTL ? 2 * sliderWidth.current : 0,
        useNativeDriver: false,
      }).start();
      setSelected(0);
    }, []);

    return (
      <SwitchTabSelectorCircleContainer
        style={containerStyle}
        onLayout={onLayout}
      >
        <CircleAnimationHorizontalLineContainer>
          <CircleAnimationHorizontalLine
            width={sliderWidth.current - 41}
            left={41}
          />
          <CircleAnimationHorizontalLine
            width={sliderWidth.current - 41}
            right={41}
          />
          <CircleAnimationContainer
            sliderWidth={sliderWidth.current}
            style={[
              !I18nManager.isRTL
                ? SwitchTabGenericStyleSheet.engAlign
                : SwitchTabGenericStyleSheet.arabicAlign,
              {
                transform: [
                  { translateX: animatedXValue },
                  { scale: scaleValue },
                ],
              },
            ]}
          />
        </CircleAnimationHorizontalLineContainer>
        <SwitchTabCircleTextContainer>
          {labelOptions?.map((Element, index) => (
            <SwitchTabCircleContainer
              activeOpacity={0.9}
              key={Element.value}
              disabled={disabled || Element?.disabled}
              onPress={toggleItem(index)}
              testID={Element.testID}
              sliderWidth={sliderWidth.current}
            >
              <IconContainer isSelected={selected === index}>
                <Element.customIcon
                  fill={
                    selected === index
                      ? colors.white
                      : theme.color.primaryLightGray
                  }
                  height={18}
                  width={18}
                />
              </IconContainer>
              <SwitchTabCircleText
                selectedColor={selectedColor}
                isSelected={selected === index}
                isBold={true}
              >
                {Element?.label}
              </SwitchTabCircleText>
            </SwitchTabCircleContainer>
          ))}
        </SwitchTabCircleTextContainer>
      </SwitchTabSelectorCircleContainer>
    );
  },
);
