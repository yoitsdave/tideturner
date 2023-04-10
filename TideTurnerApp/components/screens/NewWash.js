import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

export default NewWash = ({navigation}) => {

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

const NewWash = () => {
  const [washingMachineSize, setWashingMachineSize] = useState('');
  const [gallonsOfWater, setGallonsOfWater] = useState('');
  const [timeTaken, setTimeTaken] = useState('');

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
        label="Washing Machine (Size)"
        value={washingMachineSize}
        onChangeText={setWashingMachineSize}
      />
      <Input
        label="Gallons of Water"
        value={gallonsOfWater}
        onChangeText={setGallonsOfWater}
      />
      <Input
        label="Time Taken ("
        value={timeTaken}
        onChangeText={setTimeTaken}
      />
    </View>
  );
};

}