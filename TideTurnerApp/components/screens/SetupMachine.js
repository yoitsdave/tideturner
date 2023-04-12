import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default SetupMachineScreen = ({navigation}) => {

const Input = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

  const [washingMachineName, setWashingMachineName] = useState('');
  const [loadSizeSmall, setLoadSizeSmall] = useState('');
  const [loadSizeMed, setLoadSizeMed] = useState('');
  const [loadSizeLarge, setLoadSizeLarge] = useState('');

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

  return (
    <View style={styles.container}>
      <Input
        label="Name of Washing Machine"
        value={washingMachineName}
        onChangeText={setWashingMachineName}
      />
      <Input
        label="Load Size Small (gal)"
        value={loadSizeSmall}
        onChangeText={setLoadSizeSmall}
      />
        <Input
        label="Load Size Medium (gal)"
        value={loadSizeMed}
        onChangeText={setLoadSizeMed}
      />
        <Input
        label="Load Size Large (gal)"
        value={loadSizeLarge}
        onChangeText={setLoadSizeLarge}
      />
    </View>
  );
}