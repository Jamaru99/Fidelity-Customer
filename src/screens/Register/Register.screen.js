import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  View
} from 'react-native';
import { connect } from "react-redux";
import { TextField } from 'react-native-material-textfield';

import { registerCustomer } from '@state';
import { texts } from '@utils';

import styles from './register.style';

function RegisterScreen({ navigation, registerCustomerDispatched }) {

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
  })

  const onChange = field => text => {
    setForm({ ...form, [field]: text });
  }

  const handleRegisterPress = () => {
    registerCustomerDispatched({ form, navigation });
  }

  return (
    <ScrollView style={styles.container}>
      <TextField
        label={texts["register:placeholder:username"]}
        onChangeText={onChange("username")}
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
          
      <View style={styles.button}>
        <Button
          title={texts["register:button:sign_up"]}
          onPress={handleRegisterPress} 
        />
      </View>
    </ScrollView>
  );
}
  
const mapDispatchToProps = {
  registerCustomerDispatched: registerCustomer
}
  
export default connect(null, mapDispatchToProps)(RegisterScreen);
