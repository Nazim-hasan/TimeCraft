import { View } from 'react-native'
import React from 'react'
import Text from 'components/shared/text/Text'

const Greeting = () => {
  return (
    <View>
      <Text preset='RegularXl'>Good Morning, User</Text>
      <Text customStyles={{
        marginTop: 10
      }}>We have 5 things on the list for you</Text>
    </View>
  )
}

export default Greeting