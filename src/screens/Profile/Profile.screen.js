import React, { useState } from 'react';
import { Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';

import { setIsValidUsername } from '@state';

import styles from './profile.style';

function ProfileScreen({ customerData, isValidUsername, setIsValidUsernameDispatched }) {

  const { username, name, password } = customerData

  const [form, setForm] = useState({
    username,
    password,
    confirmPassword: "",
    name,
  })

  const [modalVisible, setModalVisible] = useState(false)

  const onChange = field => text => {
    setForm({ ...form, [field]: text })
    if(field === "username")
      setIsValidUsernameDispatched({ username: text })
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
        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.changePasswordButtonText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.saveButton}>
        <Button title="Salvar" onPress={() => {
          setModalVisible(true)
        }} />
      </View>
    </View>
  );
}

function ModalChangePassword({ modalVisible, setModalVisible }) {
  return (
    <Modal 
      animationType="slide"
      visible={modalVisible}
      transparent={true} 
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>

          <TouchableOpacity
            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
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
  setIsValidUsernameDispatched: setIsValidUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)