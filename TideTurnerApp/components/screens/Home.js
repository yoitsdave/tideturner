import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

export default HomeScreen = ({navigation}) => {
  const [textEntries, setTextEntries] = useState([
    'Entry 1',
    'Entry 2',
    'Entry 3',
    'Entry 4',
    'Entry 5',
    'Entry 6',
    'Entry 7',
    'Entry 8',
    'Entry 9',
    'Entry 10',
  ]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
    },
    textEntryContainer: {
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    textEntry: {
      fontSize: 16,
    },
  });
  
  return (
    <View style={styles.container}>

    <Button
      title="Login"
      onPress={() =>
        navigation.navigate('Login')
      }
    />

    <Button
      title="NewWash"
      onPress={() =>
        navigation.navigate('NewWash')
      }
    />

    <Button
      title="Register"
      onPress={() =>
        navigation.navigate('Register')
      }
    />

    <Button
      title="SetupFilter"
      onPress={() =>
        navigation.navigate('SetupFilter')
      }
    />

    <Button
      title="SetupMachine"
      onPress={() =>
        navigation.navigate('SetupMachine')
      }
    />


      <ScrollView>
        {textEntries.map((entry, index) => (
          <View key={index} style={styles.textEntryContainer}>
            <Text style={styles.textEntry}>{entry}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
