import React, {useState} from 'react';
import RNDatePicker from 'react-native-date-picker';

import {Container} from './styled';
import {IDatePickerProps} from './types';

const DatePicker = ({
  value,
  onSelect,
  minimumDate = new Date(),
  maximumDate = new Date('2100-01-01'),
  PickerComponent,
}: IDatePickerProps) => {
  const [open, setOpen] = useState(false);

  const onDateConfirm = (newDate: Date) => {
    onSelect(newDate);
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
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onConfirm={onDateConfirm}
        onCancel={triggerPicker}
        locale={'en-GB'}
        theme="light"
      />
    </Container>
  );
};

export default DatePicker;
