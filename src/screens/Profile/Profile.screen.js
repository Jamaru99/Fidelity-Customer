import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { layout } from '@utils';

function ProfileScreen({ customerData }) {

  const { username, name, password } = customerData

  const [form, setForm] = useState({
    username,
    password,
    confirmPassword: "",
    name,
  })

  const onChange = field => text => {
    setForm({ ...form, [field]: text });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TextField
        label='Email *'
        onChangeText={onChange("username")}
        value={form.username}
      />

      <TextField
        label='Nome *'
        onChangeText={onChange("name")}
        value={form.name}
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
        <Button title="Salvar" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: layout.defaultContainerWidth,
    alignSelf: 'center'
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

const mapStateToProps = (state) => ({
  customerData: state.customerData
})

export default connect(mapStateToProps, null)(ProfileScreen)