import {Pressable, SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {removeData} from 'storage/asyncStore';
import Text from 'components/shared/text/Text';
import { useAuthFunction } from 'services/auth/hooks';

const HomeScreen = () => {

  const {handleLogout} = useAuthFunction();
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Pressable
        onPress={() => {
          handleLogout();
        }}>
        <Text centered>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
