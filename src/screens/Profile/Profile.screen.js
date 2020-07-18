import React, { useState } from 'react';
import { Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';

import { setIsValidUsername, updateCustomer } from '@state';

import styles from './profile.style';

function ProfileScreen({ customerData, isValidUsername, setIsValidUsernameDispatched, updateCustomerDispatched }) {

  const { username, name, password } = customerData

  const [form, setForm] = useState({
    username,
    name,
  })

  const [modalVisible, setModalVisible] = useState(false)

  const onChange = field => text => {
    setForm({ ...form, [field]: text })
    if(field === "username")
      setIsValidUsernameDispatched({ username, newUsername: text })
  }

  const handleSavePress = () => {
    updateCustomerDispatched({ customerData, newCustomerData: form })
  }

  return (
    <View style={styles.container}>
      <ScrollView  contentContainerStyle={styles.contentContainer}>
        <ModalChangePassword modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <TextField
          label='Email *'
          onChangeText={onChange("username")}
          value={form.username}
          error={isValidUsername ? "" : "Username already taken"}
        />
        <TextField
          label='Nome *'
          onChangeText={onChange("name")}
          value={form.name}
        />
        <TouchableOpacity style={styles.changePasswordButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.changePasswordButtonText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.saveButton}>
        <Button title="Salvar" disabled={!isValidUsername} onPress={handleSavePress} />
      </View>
    </View>
  );
}

function ModalChangePassword({ modalVisible, setModalVisible }) {
  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextField label='Senha atual *' secureTextEntry />
          <TextField label='Nova senha *' secureTextEntry />
          <TextField label='Confirmar nova senha *' secureTextEntry />
          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  customerData: state.customerData,
  isValidUsername: state.isValidUsername
})

const mapDispatchToProps = {
  setIsValidUsernameDispatched: setIsValidUsername,
  updateCustomerDispatched: updateCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)