import { View, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const getTextInput = (styles) => ({ label, value, onChangeText, secureTextEntry }) => {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </View>
    );
  };

const getDropdownInput = (styles, options) => ({ label, value, onChangeText }) => {
    const pickerItems = options.map(option => (
        <Picker.Item label={option.label} value={option.value} key={option.key}/>
    ))

    return (
        <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <Picker
          style={styles.input}
          selectedValue={value}
          onValueChange={onChangeText}
        >
            {pickerItems}
        </Picker>
      </View>);
}

export {getTextInput, getDropdownInput}
  