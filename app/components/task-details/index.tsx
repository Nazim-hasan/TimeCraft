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
import { DoneIcon } from 'assets/icons/Done';
import { colors } from 'theme/colors';

const TaskDetails = ({taskDetails, handleSheetClose, ...props}: ITaskDetailsProps) => {
  const changeTaskStatus = async (status: taskStatuses) => {
    const taskList = await getTaskListFromDB();
    storeNewTaskToDB(modifyTask(taskList, taskDetails.id, status));
    props?.onRefresh();
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
