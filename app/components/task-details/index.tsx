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
import {ITask} from 'libs/shared/types/interfaces/task.interface';
import {ITaskDetailsProps} from './types';
import {format} from 'date-fns';

const TaskDetails = ({taskDetails}: ITaskDetailsProps) => {
  return (
    <DetailsContainer>
      <BannerImage
        source={{
          uri: taskDetails.coverImage,
        }}
      />
      <DueDate>
        Due date: {format(taskDetails?.dueDate, 'HH:MM dd MMM yyyy')}
      </DueDate>
      <TaskDescription>{taskDetails.description}</TaskDescription>
      <BottomButtonWrapper>
        <EditIcon />
        <TrashIcon />
      </BottomButtonWrapper>
    </DetailsContainer>
  );
};

export default TaskDetails;
