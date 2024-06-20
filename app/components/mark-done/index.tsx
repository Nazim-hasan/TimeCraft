import {View, Text} from 'react-native';
import React from 'react';
import {MarkAsDone, MarkDoneContainer, Remove} from './styled';

const MarkDone = () => {
  return (
    <MarkDoneContainer>
      <MarkAsDone>Mark as done</MarkAsDone>
      <Remove>Delete</Remove>
    </MarkDoneContainer>
  );
};

export default MarkDone;
