import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { getTextInput } from '../Input';

import { createMachineSetting } from '../../Remote';

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

const Input = getTextInput(styles);

export default SetupMachineScreen = ({navigation}) => {

  const [washingMachineName, setWashingMachineName] = useState('');
  const [loadSizeSmall, setLoadSizeSmall] = useState('');
  const [loadSizeMedium, setLoadSizeMedium] = useState('');
  const [loadSizeLarge, setLoadSizeLarge] = useState('');
  const [loadDurationSmall, setLoadDurationSmall] = useState('');
  const [loadDurationMedium, setLoadDurationMedium] = useState('');
  const [loadDurationLarge, setLoadDurationLarge] = useState('');

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
        label="Load Duration Small (min)"
        value={loadDurationSmall}
        onChangeText={setLoadDurationSmall}
      />

      <Input
        label="Load Size Medium (gal)"
        value={loadSizeMedium}
        onChangeText={setLoadSizeMedium}
      />
      <Input
        label="Load Duration Medium (min)"
        value={loadDurationMedium}
        onChangeText={setLoadDurationMedium}
      />

      <Input
        label="Load Size Large (gal)"
        value={loadSizeLarge}
        onChangeText={setLoadSizeLarge}
      />
      <Input
        label="Load Duration Large (min)"
        value={loadDurationLarge}
        onChangeText={setLoadDurationLarge}
      />

      <Button
        title="Submit"
        onPress={() => {
          createMachineSetting(washingMachineName, "Small", loadSizeSmall, loadDurationSmall);
          createMachineSetting(washingMachineName, "Medium", loadSizeMedium, loadDurationMedium);
          createMachineSetting(washingMachineName, "Large", loadSizeLarge, loadDurationLarge);
          navigation.navigate("Home");
        }}
      />

    </View>
  );
}