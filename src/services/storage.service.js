import { AsyncStorage } from "react-native"

export const setUserDataInStorage = async (user) => {
  try{
    await AsyncStorage.setItem('userData', JSON.stringify(user));
  } catch {}
}

export const getUserDataFromStorage = async () => {
  try{
    let userData = await AsyncStorage.getItem("userData");
    let data = JSON.parse(userData);
    return data
  } catch(error){
    return null
  }
}