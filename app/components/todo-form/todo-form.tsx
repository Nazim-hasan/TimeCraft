import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';

import {addTodoFormDefaultValues} from 'libs/shared/mocks/todo.mock';
import {TodoFormContainer, todoFormStyles} from './todo-form.styled';
import {FormInputField} from 'components/shared/FormComponents';
import {colors} from 'theme/colors';
import {todoFieldNames} from 'libs/shared/types/enums/todo.enums';

import {FormDatePicker} from 'components/shared/FormComponents/FormDatePicker';
import FormImagePicker from 'components/shared/FormComponents/FormImagePicker';
import Button from 'components/shared/button/Botton';

const TodoForm = () => {
  const addTodoForm = useForm({
    defaultValues: addTodoFormDefaultValues,
    mode: 'onChange',
  });
  const handleSubmit = addTodoForm.handleSubmit(data => {
    console.log('data', data);
  });
  return (
    <FormProvider {...addTodoForm}>
      <TodoFormContainer>
        <FormInputField
          containerStyle={todoFormStyles.containerStyle}
          inputContainerStyle={todoFormStyles.inputContainerStyle}
          inputLabel={'Title'}
          inputLabelColor={colors.lightGray}
          placeholderTextColor={colors.blueGray}
          name={todoFieldNames.title}
          placeholder={'Please enter title'}
          rules={{
            required: true,
          }}
          autoCapitalize="sentences"
          autoCorrect={false}
          nextInputName={todoFieldNames.description}
          focusNextOnSubmitEditing
        />
        <FormInputField
          containerStyle={todoFormStyles.containerStyle}
          inputContainerStyle={todoFormStyles.inputContainerStyle}
          inputLabel={'Description'}
          inputLabelColor={colors.lightGray}
          placeholderTextColor={colors.blueGray}
          name={todoFieldNames.description}
          placeholder={'Please enter description'}
          rules={{
            required: true,
          }}
          autoCapitalize="sentences"
          autoCorrect={false}
          focusNextOnSubmitEditing
        />
        <FormDatePicker
          placeholderText="Due Date"
          fieldName={todoFieldNames.dueDate}
          required
        />
        <FormImagePicker fieldName={todoFieldNames.coverImage} />
      </TodoFormContainer>
      <Button
        title="Submit"
        onPress={handleSubmit}
        customStyles={{
          marginVertical: 20,
        }}
      />
    </FormProvider>
  );
};

export default TodoForm;
