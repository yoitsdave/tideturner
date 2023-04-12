import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { getDropdownInput } from '../Input';

const getFilterOptions = () => {
  return [
    {label: "first", value:"first", key:0},
    {label: "second", value:"second", key:1},
    {label: "third", value:"third", key:2},
  ];
}

const getMachineSettingOptions = () => {
  return [
    {label: "first", value:"first", key:3},
    {label: "second", value:"second", key:4},
    {label: "third", value:"third", key:5},
  ];
}
const startWash = (washingMachineSetting, filter) => {
  alert("started wash on " + washingMachineSetting + " with filter " + filter);
}
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

export default NewWash = () => {
  const [washingMachineSetting, setWashingMachineSetting] = useState('');
  const [filter, setFilter] = useState('');

  const MachineSettingInput = getDropdownInput(styles, getMachineSettingOptions());
  const FilterInput = getDropdownInput(styles, getFilterOptions());

  return (
    <View style={styles.container}>
      <MachineSettingInput
        label="Washing Machine Setting"
        value={washingMachineSetting}
        onChangeText={setWashingMachineSetting}
      />
      <FilterInput
        label="Filter"
        value={filter}
        onChangeText={setFilter}
      />
      <Button
        title="Start"
        onPress={() => {
          startWash(washingMachineSetting, filter);
        }}
    />

    </View>
  );
};
