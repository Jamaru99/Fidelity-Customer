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
        label='Email *'
        onChangeText={onChange("username")}
      />

      <TextField
        label='Nome *'
        onChangeText={onChange("name")}
      />

      <TextField
        label='Senha *'
        secureTextEntry={true}
        onChangeText={onChange("password")}
      />

      <TextField
        label='Confirmar senha *'
        secureTextEntry={true}
        onChangeText={onChange("confirmPassword")}
      />
          
      <View style={styles.button}>
        <Button
          title="Cadastrar" 
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
