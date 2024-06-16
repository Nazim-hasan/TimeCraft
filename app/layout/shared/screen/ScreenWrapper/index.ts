import styled from 'styled-components/native';

import {IScreenWrapperProps} from './types';
import {isAndroid, statusBarHeight} from 'constants/ui';
import { colors } from 'theme/colors';

export const ScreenWrapper = styled.View<IScreenWrapperProps>`
  flex: 1;
  background-color: ${({}) =>
     'transparent'};
  padding-top: ${({includePadding = true}) =>
    isAndroid && includePadding ? `${statusBarHeight}px` : `${0}px`};
`;

export const ScreenBgWrapper = styled.View<IScreenWrapperProps>`
  background-color: ${({ themeName}) =>
    //@ts-ignore
    themeName ? themeName : colors.white};
`;
