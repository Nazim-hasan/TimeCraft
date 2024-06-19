import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  I18nManager,
  LayoutChangeEvent,
  Platform,
} from 'react-native';
import { useSetRecoilState } from 'recoil';

import { ISwitchTabSelectorProps } from '@smartcrowd/types';
import { numberAtom, textAtom } from '@smartcrowd/data-access';

import {
  SwitchTabSelectorGenericContainer,
  SwitchTabGeneric,
  SwitchTabGenericText,
  SwitchTabGenericStyleSheet,
  AnimationContainer,
  AnimationHorizontalLine,
  AnimationHorizontalLineContainer,
} from './styled';

export const SwitchTabSelectorTopGeneric = React.memo(
  ({
    containerStyle = {},
    options = [],
    selectedColor = 'desaturatedBlue',
    fontSize = 14,
    returnObject = false,
    animationDuration = 200,
    disabled = false,
    initial = 0,
    onPress,
    switchTabSelectorType,
    initialSwitchTabValue,
    isBold,
    isScrollable,
  }: ISwitchTabSelectorProps) => {
    const setTabValue = useSetRecoilState(
      numberAtom({ group: `selectedTabOption-${switchTabSelectorType}` }),
    );
    const [selected, setSelected] = useState(initial);
    const setSwitchTabSelectorType = useSetRecoilState(
      textAtom({ group: switchTabSelectorType }),
    );
    const propertyLabelOptions = options;

    const animatedValue = useRef(
      new Animated.Value(
        I18nManager.isRTL
          ? propertyLabelOptions[0].layoutData?.width || 72
          : propertyLabelOptions[0].layoutData?.width || 98,
      ),
    ).current;
    const animatedXValue = useRef(
      new Animated.Value(
        I18nManager.isRTL
          ? propertyLabelOptions[0].layoutData?.x || Platform.OS === 'ios'
            ? 279
            : 275
          : propertyLabelOptions[0].layoutData?.x || 20,
      ),
    ).current;

    useEffect(() => {
      initialSwitchTabValue && setSwitchTabSelectorType(initialSwitchTabValue);
    }, [initialSwitchTabValue]);

    useEffect(() => {
      toggleItem(0);
    }, []);

    const handleParallelAnimations = (
      toWidthValue: number,
      toXValue: number,
    ) => {
      // Define the animations
      const moveAnimation = Animated.timing(animatedXValue, {
        toValue: toXValue,
        duration: animationDuration,
        useNativeDriver: false,
      });

      const widthAnimation = Animated.spring(animatedValue, {
        toValue: toWidthValue,
        useNativeDriver: false,
      });

      // Run both animations in parallel
      Animated.parallel([moveAnimation, widthAnimation]).start();
    };

    const toggleItem = useCallback(
      (index: number, callOnPress = true) =>
        () => {
          if (options.length <= 1 || index === null || isNaN(index)) return;

          handleParallelAnimations(
            propertyLabelOptions[index].layoutData?.width,
            propertyLabelOptions[index].layoutData?.x,
          );
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

    const onLayout = useCallback(
      (event: LayoutChangeEvent) => {
        const layoutData = event.nativeEvent.layout;

        const target =
          event._dispatchInstances.child.return.memoizedProps.testID;

        for (let data of propertyLabelOptions) {
          if (data.testID === target) {
            data.layoutData = layoutData;
            break;
          }
        }
      },
      [propertyLabelOptions],
    );
    return (
      <SwitchTabSelectorGenericContainer
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        scrollEnabled={isScrollable}
        style={containerStyle}
        contentContainerStyle={{ paddingRight: 10, paddingLeft: 10 }}
      >
        <AnimationHorizontalLineContainer>
          <AnimationHorizontalLine />
        </AnimationHorizontalLineContainer>
        <AnimationContainer
          style={[
            !I18nManager.isRTL
              ? SwitchTabGenericStyleSheet.engAlign
              : SwitchTabGenericStyleSheet.arabicAlign,
            {
              width: animatedValue,
              transform: [{ translateX: animatedXValue }],
            },
          ]}
        />
        {propertyLabelOptions?.map((element, index) => (
          <SwitchTabGeneric
            key={element.value}
            disabled={disabled || element?.disabled}
            onPress={toggleItem(index)}
            testID={element.testID}
            onLayout={onLayout}
          >
            <SwitchTabGenericText
              selectedColor={selectedColor}
              fontSize={fontSize}
              isSelected={selected === index}
              isBold={isBold}
            >
              {`${element?.label}`}
            </SwitchTabGenericText>
          </SwitchTabGeneric>
        ))}
      </SwitchTabSelectorGenericContainer>
    );
  },
);
