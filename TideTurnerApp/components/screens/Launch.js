import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';

import showAlert from '../Alert';

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
  

export default LaunchScreen = ({navigation}) => {
  
    return (
        <View style={styles.container}>
          <Button
            title="I don't have an account!"
            onPress={() => {
                navigation.navigate("Register")
            }}
          />
    
          <Button
            title="I already have an account!"
            onPress={() => {
                navigation.navigate("Login")
            }}
          />
    
        </View>
    );
}