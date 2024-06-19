import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  I18nManager,
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState,
  View,
} from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';


import {
  SwitchTab,
  SwitchTabAnimatedContainer,
  SwitchTabContainer,
  SwitchTabSelectorContainer,
  SwitchTabSelectorLayout,
  SwitchTabText,
} from './styled';
import { ISwitchTabSelectorProps } from 'libs/shared/types/interfaces/switchTabSelector.interface';
import { numberAtom, textAtom } from 'libs/shared/data-access/atoms';

export const SwitchTabSelector = React.memo(
  ({
    containerStyle = {},
    options = [],
    selectedColor = 'white',
    fontSize = 14,
    backgroundColor = 'white',
    borderRadius = 10,
    borderWidth = 1,
    hasPadding = false,
    valuePadding = 1,
    height = 45,
    buttonMargin = 5,
    returnObject = false,
    animationDuration = 200,
    disabled = false,
    disableValueChangeOnPress = false,
    initial = 0,
    onPress,
    switchTabSelectorType,
    initialSwitchTabValue,
  }: ISwitchTabSelectorProps) => {
    const [tabValue, setTabValue] = useRecoilState(
      numberAtom({ group: `selectedTabOption-${switchTabSelectorType}` }),
    );
    const [selected, setSelected] = useState(initial);
    const [sliderWidth, setSliderWidth] = useState(0);
    const setSwitchTabSelectorType = useSetRecoilState(
      textAtom({ group: switchTabSelectorType }),
    );

    const responderEnd = (
      _e: GestureResponderEvent,
      gestureState: PanResponderGestureState,
    ): void | undefined => {
      if (disabled) return;
      const swipeDirection = getSwipeDirection(gestureState);
      if (swipeDirection === 'RIGHT' && selected < options.length - 1) {
        toggleItem(selected + 1)();
      } else if (swipeDirection === 'LEFT' && selected > 0) {
        toggleItem(selected - 1)();
      }
    };

    const shouldSetResponder = (
      evt: GestureResponderEvent,
      gestureState: PanResponderGestureState,
    ): boolean =>
      evt.nativeEvent.touches.length === 1 &&
      !(Math.abs(gestureState.dx) < 5 && Math.abs(gestureState.dy) < 5);

    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: shouldSetResponder,
        onMoveShouldSetPanResponder: shouldSetResponder,
        onPanResponderRelease: responderEnd,
        onPanResponderTerminate: responderEnd,
      }),
    ).current;

    const initialAnimatedValue = I18nManager.isRTL
      ? -(initial / options.length)
      : initial / options.length;

    const animatedValue = useRef(
      new Animated.Value(initial ? initialAnimatedValue : 0),
    ).current;

    useEffect(() => {
      initialSwitchTabValue && setSwitchTabSelectorType(initialSwitchTabValue);
    }, [initialSwitchTabValue]);

    useEffect(() => {
      toggleItem(tabValue, !disableValueChangeOnPress)();
    }, [tabValue]);

    const getSwipeDirection = useCallback(
      (gestureState: PanResponderGestureState) => {
        const { dx, dy, vx } = gestureState;
        // 0.1 velocity
        if (Math.abs(vx) > 0.1 && Math.abs(dy) < 80) {
          return dx > 0 ? 'RIGHT' : 'LEFT';
        }
        return null;
      },
      [],
    );

    const animate = useCallback(
      (toValue: number, last: number) => {
        animatedValue.setValue(last);
        Animated.timing(animatedValue, {
          toValue,
          duration: animationDuration,
          easing: Easing.cubic,
          useNativeDriver: true,
        }).start();
      },
      [animationDuration],
    );

    const toggleItem = useCallback(
      (index: number, callOnPress = true) =>
        () => {
          if (options.length <= 1 || index === null || isNaN(index)) return;
          animate(
            I18nManager.isRTL
              ? -(index / options.length)
              : index / options.length,
            I18nManager.isRTL
              ? -(selected / options.length)
              : selected / options.length,
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
        const { width } = event.nativeEvent.layout;
        setSliderWidth(width - (hasPadding ? 2 : 0));
      },
      [hasPadding],
    );

    return (
      <SwitchTabSelectorContainer style={containerStyle}>
        <View {...panResponder.panHandlers} style={{ flex: 1 }}>
          <SwitchTabSelectorLayout
            borderRadius={borderRadius}
            height={height}
            backgroundColor={backgroundColor}
            onLayout={onLayout}
          >
            <SwitchTabContainer
              borderRadius={borderRadius}
              hasPadding={hasPadding}
              borderWidth={borderWidth}
            >
              {!!sliderWidth && (
                <SwitchTabAnimatedContainer
                  hasPadding={hasPadding}
                  height={height}
                  valuePadding={valuePadding}
                  borderWidth={borderWidth}
                  borderRadius={borderRadius}
                  sliderWidth={sliderWidth}
                  optionsLength={options?.length}
                  buttonMargin={buttonMargin}
                  style={[
                    {
                      transform: [
                        {
                          translateX: animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                              hasPadding ? valuePadding : 0,
                              sliderWidth - (hasPadding ? valuePadding : 0),
                            ],
                          }),
                        },
                      ],
                    },
                  ]}
                />
              )}
              {options?.map((element, index) => (
                <View key={element.value} style={{ flex: 1 }}>
                  <SwitchTab
                    disabled={disabled || element?.disabled}
                    onPress={toggleItem(index)}
                    testID={element.testID}
                  >
                    <SwitchTabText
                      selectedColor={selectedColor}
                      fontSize={fontSize}
                      isSelected={selected === index}
                    >
                      {element?.label}
                    </SwitchTabText>
                  </SwitchTab>
                </View>
              ))}
            </SwitchTabContainer>
          </SwitchTabSelectorLayout>
        </View>
      </SwitchTabSelectorContainer>
    );
  },
);
