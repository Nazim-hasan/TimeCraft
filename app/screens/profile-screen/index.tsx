import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Screen } from 'layout/shared/screen/Screen'
import { commonStyles } from 'libs/shared/ui/styleSheet'
import { ProfileScreenStyles } from './styled'
import { useAuthFunction } from 'services/auth/hooks'

const ProfileScreen = () => {
  const {handleLogout} = useAuthFunction();
  return (
    <Screen
      preset="fixed"
      scrollViewStyle={commonStyles.scrollViewContainerWithoutHeader}
      style={ProfileScreenStyles.screenContainer}
      stickyHeaderIndices={[1]}
      themeName="white"
      bounces={false}>
        <Pressable onPress={handleLogout}>
          <Text>Logout</Text>
        </Pressable>
      </Screen>
  )
}

export default ProfileScreen