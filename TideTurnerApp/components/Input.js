import { View, TextInput, Text, Picker } from 'react-native';


const getTextInput = (styles) => ({ label, value, onChangeText }) => {
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

const getDropdownInput = (styles, options) => ({ label, value, onChangeText }) => {
    const pickerItems = options.map(option => (
        <Picker.Item label={option.label} value={option.value} key={options.key}/>
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
  