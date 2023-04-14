import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';


import { setUsernamePassword } from '../../KeyStore';
import { requestAccessToken, createNewUser } from '../../Remote';

import { getTextInput } from '../Input';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginRight: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 5,
      height: 40,
      width: 200,
      paddingHorizontal: 10,
      fontSize: 16,
    },
});
  
const TextInput = getTextInput(styles);

const registerUser = async (username, password, navigation) => {
  const success = await createNewUser(username, password);

  if (success) {
    await setUsernamePassword(username, password);
    const success = await requestAccessToken();

    if (success) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      alert("something weird went wrong - can't help more but search code for WHOOPSIES!!");
    }
  } else{
    alert("that username is taken! please try again");
  }
}

export default RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    return (
        <View style={styles.container}>
          <Button
            title="I have an account already!"
            onPress={() => {
                navigation.navigate("Login")
            }}
          />

          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
    
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
          />
    
          <Button
            title="Register"
            onPress={() => {
              registerUser(username, password, navigation);
            }}
          />
    
        </View>
    );
}