import React from 'react';

import { IconContainer } from './styled';
import { IInputIconProps } from './types';

export const InputIcon = ({ icon }: IInputIconProps) => (
  <IconContainer>{icon}</IconContainer>
);
