import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';

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

const logInUser = (username, password) => {
    alert("logging in user with name " + username + " and password " + password);
}

export default LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    return (
        <View style={styles.container}>
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
          />
    
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
          />
    
          <Button
            title="Log In"
            onPress={() => {
                logInUser(username, password);
            }}
          />
    
        </View>
    );
}