import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

const getFilterEfficiency = () => {
  // todo
}


const getMachineSettingGallons = () => {
  // todo
}

const getName = () => {

}

const getMachine = () => {

}

export default HomeScreen = ({navigation}) => {

  const [textEntries, setTextEntries] = useState([]);

  const textEntry = (name, machineSetting, filter, machine) => {
    const userMachine = getMachine(machine);
    const userName = getName(name);
    const efficiency = getFilterEfficiency(filter);
    const gallons = getMachineSettingGallons(machineSetting);
    const entry = `${name} filtered out ${machineSetting} gallons 
    with the ${machine}.`;
    setTextEntries(prevEntries => [...prevEntries, entry]);
  };

  useEffect(() => {
    textEntry('John Smith', 'Model XYZ', 75, 'In-Tank Filter');
    textEntry('Jane Doe', 'Model ABC', 100, 'In-Line Filter');
    textEntry('Bob Johnson', 'Model LMN', 50, 'UV Filter');
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 50,
      paddingBottom: 20,
    },
    buttonContainer: {
      width: '100%',
      paddingHorizontal: 10,
      marginBottom: 10,
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

      <ScrollView>
        {textEntries.map((entry, index) => (
          <View key={index} style={styles.textEntryContainer}>
            <Text style={styles.textEntry}>{entry}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />

        <Button
          title="NewWash"
          onPress={() => navigation.navigate('NewWash')}
        />

        <Button
          title="LeaderBoard"
          onPress={() => navigation.navigate('LeaderBoard')}
        />

        <Button
          title="Register"
          onPress={() => navigation.navigate('Register')}
        />

        <Button
          title="SetupMachine"
          onPress={() => navigation.navigate('SetupMachine')}
        />
      </View>
      
    </View>
  );
}
