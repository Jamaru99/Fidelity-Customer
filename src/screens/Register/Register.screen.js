import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { connect } from "react-redux";
import { TextField } from 'react-native-material-textfield';

import { CustomButton } from '@components';
import { registerCustomer, setIsValidUsername } from '@state';
import { texts } from '@utils';

import styles from './register.style';

function RegisterScreen({
  navigation,
  isValidUsername,
  setIsValidUsernameDispatched,
  registerCustomerDispatched,
  loading
}) {

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
  })

  const [isValidEmail, setIsValidEmail] = useState(true)

  const onChange = field => text => {
    setForm({ ...form, [field]: text })
    setIsValidEmail(true)
    if(field === "username")
      setIsValidUsernameDispatched({ username: "", newUsername: text })
  }

  const checkValidEmail = () => {
    const isValidEmaill = (form.username.includes("@") && form.username.length > 3) || form.username === ""
    setIsValidEmail(isValidEmaill)
  }

  const handleRegisterPress = () => {
    registerCustomerDispatched({ form, navigation });
  }

  return (
    <ScrollView style={styles.container}>

      <TextField
        label={texts["register:placeholder:username"]}
        onChangeText={onChange("username")}
        onBlur={checkValidEmail}
        error={!isValidEmail ? "Email invalido" : isValidUsername ? "" : "Username already taken"}
      />

      <TextField
        label={texts["register:placeholder:name"]}
        onChangeText={onChange("name")}
      />

      <TextField
        label={texts["register:placeholder:password"]}
        secureTextEntry={true}
        onChangeText={onChange("password")}
      />

      <TextField
        label={texts["register:placeholder:confirm_password"]}
        secureTextEntry={true}
        onChangeText={onChange("confirmPassword")}
      />
          
      <CustomButton
        onPress={handleRegisterPress}
        title={texts["register:button:sign_up"]}
        loading={loading}
        disabled={
          !isValidEmail || !isValidUsername || !form.name ||
          !form.password || !form.confirmPassword || !form.username
        }
      />

    </ScrollView>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  isValidUsername: state.isValidUsername
})
  
const mapDispatchToProps = {
  registerCustomerDispatched: registerCustomer,
  setIsValidUsernameDispatched: setIsValidUsername
}
  
export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
