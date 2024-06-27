import React from 'react';

import TrashIcon from 'assets/icons/Trash';
import {colors} from 'theme/colors';
import {getTaskListFromDB, storeNewTaskToDB} from 'storage/asyncStore';
import {modifyTaskStatus} from 'services/helper/task-util';

import {
  DoneWrapper,
  MarkAsDone,
  MarkDoneContainer,
  RemoveIconWrapper,
} from './styled';
import {IMarkProps} from './types';
import {taskStatuses} from 'libs/shared/types/enums/todo.enums';

const MarkDone = ({taskInfo, onRefresh}: IMarkProps) => {
  const changeTaskStatus = async (status: taskStatuses) => {
    const taskList = await getTaskListFromDB();
    storeNewTaskToDB(modifyTaskStatus(taskList, taskInfo.id, status));
    onRefresh();
  };

  const isTaskDone = taskInfo.status === taskStatuses.done;
  const isTaskRemoved = taskInfo.status === taskStatuses.removed;

  return (
    <MarkDoneContainer>
      {!isTaskDone && !isTaskRemoved && (
        <DoneWrapper onPress={() => changeTaskStatus(taskStatuses.done)}>
          <MarkAsDone>Mark as done</MarkAsDone>
        </DoneWrapper>
      )}
      {!isTaskRemoved && (
        <RemoveIconWrapper
          onPress={() => changeTaskStatus(taskStatuses.removed)}>
          <TrashIcon color={colors.danger} />
        </RemoveIconWrapper>
      )}
    </MarkDoneContainer>
  );
};

export default MarkDone;
