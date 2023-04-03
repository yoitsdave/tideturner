import React, { useState, useCallback } from "react";
import Button from './components/Button';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Header from "./components/Header";
import {useForm, Controller} from 'react-hook-form';

const getGenderOpts = () => {
  return [
    { label: "Chlora Ball", value: "male" },
    { label: "In-Line Filter", value: "female" },
    { label: "Carbon Filter", value: "neutral" },
    { label: "Reverse Osmosis Filter", value: "neutral" },

  ]
}

const Sign = () => {
  var genderOpts = getGenderOpts();

  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState(genderOpts);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [companyValue, setCompanyValue] = useState(null);
  const [company, setComapny] = useState([
    { label: "Chlora Ball", value: "male" },
    { label: "In-Line Filter", value: "female" },
    { label: "Carbon Filter", value: "neutral" },
    { label: "Reverse Osmosis Filter", value: "neutral" },
  ]);
  const [loading, setLoading] = useState(false);
  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);
  
  const onCompanyOpen = useCallback(() => {
    setGenderOpen(false);
  }, []);
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data, "data");
  };

  const onCompanyChange = (value) => {
    setCompanyValue(value);
    setCompany(company.map(item => {
      return {
        ...item,
        selected: item.value === value
      };
    }));
  };



  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.label}>Name Of Filter</Text>
      <Controller
        name="company"
        defaultValue=""
        control={control}
        render={({ field: { onChange, value } }) => (
          <View style={styles.dropdownCompany}>
            <DropDownPicker
              style={styles.dropdown}
              open={companyOpen}
              value={companyValue} //companyValue
              items={company}
              setOpen={setCompanyOpen}
              setValue={setCompanyValue}
              setItems={setComapny}
              placeholder="Select Filter"
              placeholderStyle={styles.placeholderStyles}
              loading={loading}
              activityIndicatorColor="#5188E3"
              searchable={true}
              searchPlaceholder="Search your filter here..."
              onOpen={onCompanyOpen}
              onChangeValue={onChange}
               zIndex={1000}
              zIndexInverse={3000}
            />
          </View>
        )}
      />
      </View>
   
      <View style={styles.footerContainer}>
        <Button label="Print Value" />
      </View>

     
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 5,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "blue",
  },

  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 8,
  },
  container: {
    backgroundColor: 'gray',
    width: 500,
    height: 100,
    justifyContent: 'left',
    alignItems: 'left',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
  


export default Sign;
