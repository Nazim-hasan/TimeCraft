import AsyncStorage from '@react-native-async-storage/async-storage';


const authKey = 'authUser';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(authKey, jsonValue);
  } catch (e) {
    console.log(e)
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(authKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e)
  }
};

const removeData = async () => {
  try {
    await AsyncStorage.removeItem(authKey);
  } catch (e) {
    console.log(e)
  }
};




export {storeData, getData, removeData};
