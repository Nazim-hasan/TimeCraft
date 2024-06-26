import React from 'react';
import {FormProvider, useForm} from 'react-hook-form';
import {useRecoilRefresher_UNSTABLE} from 'recoil';

import {addTodoFormDefaultValues} from 'libs/shared/mocks/todo.mock';
import {TodoFormContainer, todoFormStyles} from './todo-form.styled';
import {FormInputField} from 'components/shared/FormComponents';
import {colors} from 'theme/colors';
import {taskStatuses, todoFieldNames} from 'libs/shared/types/enums/todo.enums';

import {FormDatePicker} from 'components/shared/FormComponents/FormDatePicker';
import FormImagePicker from 'components/shared/FormComponents/FormImagePicker';
import Button from 'components/shared/button/Botton';
import {getTaskListFromDB, storeNewTaskToDB} from 'storage/asyncStore';
import {todoSelector} from 'libs/shared/data-access/task/task.selector';
import {ITask} from 'libs/shared/types/interfaces/task.interface';
import {Task} from 'services/helper/task-util';

import {TodoFormProps} from './todo-form.types';
import notificationUtil from 'services/helper/notification-util';

const TodoForm = ({handleSheetClose}: TodoFormProps) => {
  const refreshTodoList = useRecoilRefresher_UNSTABLE(
    todoSelector(taskStatuses.todo),
  );

  const addTodoForm = useForm({
    defaultValues: addTodoFormDefaultValues,
    mode: 'onChange',
  });
  const handleSubmit = addTodoForm.handleSubmit(data => {
    const payload = {
      ...data,
      status: taskStatuses.todo,
      id: Math.random().toString(36).substring(7),
    };
    storeTaskDB(payload).then(() => {
      refreshTodoList();
      reset();
      handleSheetClose();
      const reminder = data.title;
      const date = data.dueDate;
      notificationUtil.scheduleNotification({reminder, date, id: payload.id});
    });
  });

  const {reset} = addTodoForm;

  const storeTaskDB = async (value: ITask) => {
    let tempTaskList: ITask[] = [];
    try {
      let previousTaskList = await getTaskListFromDB();
      if (previousTaskList !== null) {
        tempTaskList = previousTaskList;
      }
      tempTaskList.push(value);
      storeNewTaskToDB(tempTaskList);
    } catch (error) {
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
            validate: Task.isTitleValid,
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
            validate: Task.isDescriptionValid,
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
        <FormImagePicker
          fieldName={todoFieldNames.coverImage}
          rules={{
            required: true,
            validate: Task.isCoverImageValid,
          }}
        />
      </TodoFormContainer>
      <Button
        title="Submit"
        onPress={handleSubmit}
        customStyles={todoFormStyles.buttonStyle}
        disabled={!addTodoForm.formState.isValid}
      />
    </FormProvider>
  );
};

export default TodoForm;
