import React from 'react';
import {
  BannerImage,
  BottomButtonWrapper,
  DetailsContainer,
  DueDate,
  TaskDescription,
} from './styled';
import TrashIcon from 'assets/icons/Trash';
import {EditIcon} from 'assets/icons/EditIcon';
import {ITaskDetailsProps} from './types';
import {format} from 'date-fns';
import { getTaskListFromDB, storeNewTaskToDB } from 'storage/asyncStore';
import { modifyTask } from 'services/helper/task-util';
import { taskStatuses } from 'libs/shared/types/enums/todo.enums';
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from 'recoil';
import { todoSelector } from 'libs/shared/data-access/task/task.selector';
import { TableType } from 'libs/shared/types/enums/table.enum';
import { textAtom } from 'libs/shared/data-access/atoms';
import { DoneIcon } from 'assets/icons/Done';
import { colors } from 'theme/colors';

const TaskDetails = ({taskDetails, handleSheetClose}: ITaskDetailsProps) => {

  const tabOption = useRecoilValue(textAtom({group: TableType.todo}));
  const refreshTodoList = useRecoilRefresher_UNSTABLE(
    todoSelector(tabOption),
  );

  const changeTaskStatus = async (status: taskStatuses) => {
 
    const taskList = await getTaskListFromDB();
    storeNewTaskToDB(modifyTask(taskList, taskDetails.id, status));
    refreshTodoList();
    handleSheetClose();
  };
  return (
    <DetailsContainer>
      <BannerImage
        source={{
          uri: taskDetails.coverImage,
        }}
      />
      <DueDate>
        Due date: {format(taskDetails?.dueDate, 'K:mma dd MMM yyyy')}
      </DueDate>
      <TaskDescription>{taskDetails.description}</TaskDescription>
      <BottomButtonWrapper>
        <EditIcon onPress={() => {
          console.log('coming soon')
        }}/>
        <DoneIcon onPress={() => {
          changeTaskStatus(taskStatuses.done);
        }}/>
        <TrashIcon color={colors.danger} onPress={() => {
          changeTaskStatus(taskStatuses.removed);
        }}/>
      </BottomButtonWrapper>
    </DetailsContainer>
  );
};

export default TaskDetails;
