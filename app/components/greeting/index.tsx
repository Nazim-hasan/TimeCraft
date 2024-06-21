import { Pressable, View } from 'react-native'
import React from 'react'
import Text from 'components/shared/text/Text'
import { GreetingsWrapper, IconContainer } from './styled'
import PlusIcon from 'assets/icons/Plus'

const Greeting = ({onPressAdd}) => {

  return (
    <View>
      <GreetingsWrapper>
      <Text preset='RegularXl'>Good Morning, User</Text>
      <IconContainer onPress={onPressAdd}>
      <PlusIcon />
      </IconContainer>
      </GreetingsWrapper>
      <Text customStyles={{
        marginTop: 10
      }}>We have 5 things on the list for you</Text>
    </View>
  )
}

export default Greeting