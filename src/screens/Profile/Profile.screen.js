import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { TextField } from 'react-native-material-textfield';
import { layout } from '@utils';

export default function ProfileScreen() {

  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    nCardPoints: "",
    state: "",
    city: "",
    address: "" 
  })

  const onChange = field => text => {
    setForm({ ...form, [field]: text });
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <TextField
        label='Email *'
        onChangeText={onChange("username")}
      />

      <TextField
        label='Nome da empresa *'
        onChangeText={onChange("name")}
      />

      <TextField
        label='Número de pontos do cartão *'
        onChangeText={onChange("nCardPoints")}
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

      <TextField
        label='Estado *'
        onChangeText={onChange("state")}
      />

      <TextField
        label='Cidade *'
        onChangeText={onChange("city")}
      />
          
      <View style={styles.button}>
        <Button
          title="Salvar" 
        />
      </View>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
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
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
