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
import { getTaskListFromDB, storeNewTaskToDB } from 'storage/asyncStore';

const TodoForm = ({handleSheetClose}) => {
  const addTodoForm = useForm({
    defaultValues: addTodoFormDefaultValues,
    mode: 'onChange',
  });
  const handleSubmit = addTodoForm.handleSubmit(data => {
    console.log('data', data);
    const payload = {
      ...data, 
      status: 'todo',
      id: Math.random().toString(36).substring(7)
    }
    storeTaskDB(payload)
  });

  const {reset} = addTodoForm;


  const storeTaskDB = async (value: any) => {
    let tempTaskList = [];
    try {
      let previousTaskList = await getTaskListFromDB();
      if (previousTaskList !== null) {
        tempTaskList = previousTaskList; // you could do some additional checks to make sure it is an array
      }
      tempTaskList.push(value);
      storeNewTaskToDB(tempTaskList);
      // dispatch({
      //   type: "SET_REFRESH",
      //   refresh: !refresh
      // })
      // showMessage({
      //   message: 'Brand Added',
      //   type: 'success',
      // });
      reset();

      handleSheetClose(); // close the bottom sheet
    } catch (error) {
      // Error saving data
      console.log(error);
    }
  };

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
          bottomSheetInput
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
          bottomSheetInput
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
