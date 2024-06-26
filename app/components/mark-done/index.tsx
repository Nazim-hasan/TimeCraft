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

const MarkDone = ({id}: IMarkProps) => {
  const changeTaskStatus = async (status: string) => {
    const taskList = await getTaskListFromDB();
    storeNewTaskToDB(modifyTask(taskList, id, status));
  };

  return (
    <MarkDoneContainer>
      <DoneWrapper onPress={() => changeTaskStatus('completed')}>
        <MarkAsDone>Mark as done</MarkAsDone>
      </DoneWrapper>
      <RemoveIconWrapper onPress={() => changeTaskStatus('deleted')}>
        <TrashIcon color={colors.danger} />
      </RemoveIconWrapper>
    </MarkDoneContainer>
  );
};

export default MarkDone;
