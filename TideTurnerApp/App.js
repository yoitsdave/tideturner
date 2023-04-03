import React, { useState, useCallback } from "react";
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

const Sign = () => {
  const [genderOpen, setGenderOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: "Chlora Ball", value: "male" },
    { label: "In-Line Filter", value: "female" },
    { label: "Carbon Filter", value: "neutral" },
    { label: "Reverse Osmosis Filter", value: "neutral" },

  ]);
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
   


      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Text style={styles.getStarted}>Get Started</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.logIn}>
        <Text style={styles.links}>I have an account</Text>
      </TouchableOpacity>
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
    borderWidth: 1,
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
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});

export default Sign;
