import { View, Text } from 'react-native'
import React from 'react'
import { MarkAsDone, MarkDoneContainer } from './styled'

const MarkDone = () => {
  return (
    <MarkDoneContainer>
      <MarkAsDone>Mark as done</MarkAsDone>
    </MarkDoneContainer>
  )
}

export default MarkDone