import React from 'react';

import TrashIcon from 'assets/icons/Trash';
import {colors} from 'theme/colors';
import {getTaskListFromDB, storeNewTaskToDB} from 'storage/asyncStore';
import {modifyTask} from 'services/helper/task-util';

import {
  DoneWrapper,
  MarkAsDone,
  MarkDoneContainer,
  RemoveIconWrapper,
} from './styled';
import {IMarkProps} from './types';
import {taskStatuses} from 'libs/shared/types/enums/todo.enums';

const MarkDone = ({id}: IMarkProps) => {
  const changeTaskStatus = async (status: string) => {
    const taskList = await getTaskListFromDB();
    storeNewTaskToDB(modifyTask(taskList, id, status));
  };

  return (
    <MarkDoneContainer>
      <DoneWrapper onPress={() => changeTaskStatus(taskStatuses.done)}>
        <MarkAsDone>Mark as done</MarkAsDone>
      </DoneWrapper>
      <RemoveIconWrapper onPress={() => changeTaskStatus(taskStatuses.removed)}>
        <TrashIcon color={colors.danger} />
      </RemoveIconWrapper>
    </MarkDoneContainer>
  );
};

export default MarkDone;
