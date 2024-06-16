import React from 'react';

import { isNonScrolling } from './screen.presets';
import { ScreenWithoutScrolling } from './ScreenWithoutScrolling';
import { ScreenWithScrolling } from './ScreenWithScrolling';
import { ScreenWrapper } from './ScreenWrapper';
import { ScreenProps } from './types';
import Header from '../Header';

/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
export const Screen = (props: ScreenProps) => (
  <ScreenWrapper themeName={props?.themeName}>
    {props?.withHeader && <Header {...props?.headerStyle} />}

    {isNonScrolling(props?.preset) ? (
      <ScreenWithoutScrolling {...props} />
    ) : (
      <ScreenWithScrolling {...props} />
    )}
  </ScreenWrapper>
);
