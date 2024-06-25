import {View, Text} from 'react-native';
import React from 'react';
import {
  BannerImage,
  BottomButtonWrapper,
  DetailsContainer,
  DueDate,
  TaskDescription,
} from './styled';
import {images} from 'theme/images';
import Button from 'components/shared/button/Botton';
import TrashIcon from 'assets/icons/Trash';
import { EditIcon } from 'assets/icons/EditIcon';

const TaskDetails = () => {
  return (
    <DetailsContainer>
      <BannerImage source={images.loginBanner} />
      <DueDate>Due date: 16:00PM, 29-January-2024</DueDate>
      <TaskDescription>
        A dummy activity is an activity added to a project schedule as a
        placeholder. It has no activity time associated with it. A dummy
        activity is intended to show a path of action in a project activity
        diagram and is employed when a logical relationship between two
        activities cannot be linked by showing the use of arrows linking one
        activity to another. It typically appears as a dashed line that links
        two tasks.
      </TaskDescription>
      <BottomButtonWrapper>
        <EditIcon />
        <TrashIcon />
      </BottomButtonWrapper>
    </DetailsContainer>
  );
};

export default TaskDetails;
