import React, {useState} from 'react';
import RNDatePicker from 'react-native-date-picker';

import {Container} from './styled';
import {IDatePickerProps} from './types';

const DatePicker = ({value, onSelect, PickerComponent}: IDatePickerProps) => {
  const [open, setOpen] = useState(false);

  const onDateConfirm = (newDate: Date) => {
    const adjustedDate = new Date(newDate);
    adjustedDate.setSeconds(0, 0);
    onSelect(adjustedDate);
    triggerPicker();
  };

  const triggerPicker = () => setOpen(!open);

  return (
    <Container>
      {PickerComponent &&
        React.cloneElement(PickerComponent, {
          onPress: triggerPicker,
        })}
      <RNDatePicker
        modal
        open={open}
        date={value}
        mode="datetime"
        onConfirm={onDateConfirm}
        onCancel={triggerPicker}
        locale={'en-GB'}
        theme="light"
      />
    </Container>
  );
};

export default DatePicker;
