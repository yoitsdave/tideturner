import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';

import { deleteUsernamePassword } from '../../KeyStore';
import { getRuns, getFilterName, getUserName, getMachineSettingGallons } from '../../Remote';


export default HomeScreen = ({navigation}) => {

  const [textEntries, setTextEntries] = useState([]);

  const textEntry = (userName, gallons, filterName) => {
    const entry = `${userName} filtered out ${gallons} gallons 
    with the ${filterName}.`;

    setTextEntries(prevEntries => [...prevEntries, entry]);
  };

  useEffect(() => {
    getRuns().then( (results) => {
      results.map( async (result) => {
        const userName = await getUserName(result[0]);
        const gallons = await getMachineSettingGallons(result[1]);
        const filterName = await getFilterName(result[2]);

        textEntry(userName, gallons, filterName);
      })
    });
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
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      width: 80,
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
          title="NewWash"
          style={styles.button}
          onPress={() => navigation.navigate('NewWash')}
        />

        <Button
          title="LeaderBoard"
          style={styles.button}
          onPress={() => navigation.navigate('LeaderBoard')}
        />

        <Button
          title="SetupMachine"
          style={styles.button}
          onPress={() => navigation.navigate('SetupMachine')}
        />

        <Button
          title="Logout"
          style={styles.button}
          onPress={() => {
            deleteUsernamePassword();
            navigation.reset({
              index: 0,
              routes: [{ name: 'Launch' }],
            });
          }}
        />
      </View>
      
    </View>
  );
}
