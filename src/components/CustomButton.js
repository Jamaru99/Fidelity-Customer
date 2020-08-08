import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { colors } from '@utils';
import { InnerLoader } from './Loader';

export default function CustomButton({ onPress, loading, title, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabledBackground : styles.enabledBackground]}
      onPress={onPress}
    >
      {
        loading ?
          <InnerLoader /> :
          <Text style={styles.buttonTitle}>{title}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 12,
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  buttonTitle: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center"
  },
  enabledBackground: {
    backgroundColor: colors.tintColor
  },
  disabledBackground: {
    backgroundColor: colors.lightGray
  }
})