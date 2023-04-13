import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { getDropdownInput } from '../Input';

import { createRun, getFilterOptions, getMachineSettingOptions } from '../../Remote';

const startWash = (washingMachineSetting, filter) => {
  createRun(washingMachineSetting, filter);
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

export default NewWash = ({navigation}) => {
  const [washingMachineSettingOpts, setWashingMachineSettingOpts] = useState([]);
  const [filterOpts, setFilterOpts] = useState([]);

  const [washingMachineSetting, setWashingMachineSetting] = useState('');
  const [filter, setFilter] = useState('');

  var MachineSettingInput = getDropdownInput(styles, washingMachineSettingOpts);
  var FilterInput = getDropdownInput(styles, filterOpts);
  useEffect(() => {
    getMachineSettingOptions().then( (options) => {
      setWashingMachineSettingOpts(options);
      if (options.length > 0) {
        setWashingMachineSetting(options[0].value)
      }
    });
    getFilterOptions().then( (options) => {
      setFilterOpts(options);
      if (options.length > 0) {
        setFilter(options[0].value)
      }
    });
  }, [])

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
          navigation.navigate("Home");
        }}
    />

    </View>
  );
};
