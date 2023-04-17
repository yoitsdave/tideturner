import AsyncStorage from '@react-native-async-storage/async-storage';

const setUsernamePassword = async (username, password) => {
    try {
        await AsyncStorage.setItem('@username', username);
        await AsyncStorage.setItem('@password', password);
    } catch (e) {
        alert("failed to set asyncstorage!" + e);
    }
}

const getUsernamePassword = async () => {
    try {
        const username = await AsyncStorage.getItem('@username');
        const password = await AsyncStorage.getItem('@password');

        if(username !== null && password != null) {
          return [username, password];
        } else {
            return [null, null];
        }
      } catch(e) {
        alert("failed to read asyncstorage!" + e);
    }
}

const deleteUsernamePassword = async () => {
    try {
        await AsyncStorage.removeItem('@username');
        await AsyncStorage.removeItem('@password');
    } catch (e) {
        alert("failed to set asyncstorage!" + e);
    }
}

const setAccessToken = async (accessToken) => {
    try {
        await AsyncStorage.setItem('@access_token', accessToken);
    } catch (e) {
        alert("failed to set asyncstorage!" + e);
    }
}

const getAccessToken = async () => {
    try {
        return await AsyncStorage.getItem('@access_token');
    } catch(e) {
        alert("failed to read asyncstorage!" + e);
    }
}

const deleteAccessToken = async () => {
    try {
        await AsyncStorage.removeItem('@access_token');
    } catch (e) {
        alert("failed to set asyncstorage!" + e);
    }
}

export {setUsernamePassword, getUsernamePassword, deleteUsernamePassword, setAccessToken, getAccessToken, deleteAccessToken}