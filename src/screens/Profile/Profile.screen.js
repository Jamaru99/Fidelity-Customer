import React, { useState } from 'react';
import { Text, View, Button, Modal, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import Toast from 'react-native-tiny-toast'

import { setIsValidUsername, updateCustomer } from '@state';
import { CustomButton } from '@components';
import { texts } from '@utils';

import styles from './profile.style';

function ProfileScreen({
  customerData,
  loading,
  isValidUsername,
  setIsValidUsernameDispatched,
  updateCustomerDispatched
}) {

  const { username, name } = customerData

  const [form, setForm] = useState({
    username,
    name
  })

  const [modalVisible, setModalVisible] = useState(false)

  const onChange = field => text => {
    setForm({ ...form, [field]: text })
    if (field === "username")
      setIsValidUsernameDispatched({ username, newUsername: text })
  }

  const handleSavePress = () => {
    updateCustomerDispatched({
      customerData,
      newCustomerData: form,
      callbackSuccess: () => Toast.showSuccess("Dados alterados!"),
      callbackFailure: () => Toast.show(texts.generic_error)
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <ModalChangePassword
          customerData={customerData}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          updateCustomerDispatched={updateCustomerDispatched}
        />
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
      <CustomButton
        onPress={handleSavePress}
        title={texts["profile:save_button"]}
        loading={loading}
        disabled={!isValidUsername}
      />
    </View>
  );
}

function ModalChangePassword({ customerData, modalVisible, setModalVisible, updateCustomerDispatched }) {

  const [form, setForm] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: ""
  })

  const onChange = field => text => {
    setForm({ ...form, [field]: text })
  }

  const close = () => {
    setModalVisible(false)
    setForm({
      currentPassword: "",
      password: "",
      confirmPassword: ""
    })
  }

  const handleChangePasswordPress = () => {
    if (form.currentPassword === customerData.password && form.password === form.confirmPassword) {
      updateCustomerDispatched({
        customerData,
        newCustomerData: form,
        callbackSuccess: () => Toast.showSuccess("Senha alterada!"),
        callbackFailure: () => Toast.show(texts.generic_error)
      })
      close()
    } else {
      Toast.show("Ops! não deu certo")
    }
  }

  return (
    <Modal animationType="slide" visible={modalVisible} transparent={true}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextField
            label='Senha atual *'
            onChangeText={onChange("currentPassword")}
            secureTextEntry />
          <TextField
            label='Nova senha *'
            onChangeText={onChange("password")}
            secureTextEntry />
          <TextField
            label='Confirmar nova senha *'
            onChangeText={onChange("confirmPassword")}
            secureTextEntry
          />
          <CustomButton
            onPress={handleChangePasswordPress}
            title="Change Password"
            disabled={
              !form.currentPassword ||
              !form.password ||
              !form.confirmPassword
            }
          />
        </View>
      </View>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  customerData: state.customerData,
  isValidUsername: state.isValidUsername
})

const mapDispatchToProps = {
  setIsValidUsernameDispatched: setIsValidUsername,
  updateCustomerDispatched: updateCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)