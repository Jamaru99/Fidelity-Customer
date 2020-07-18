import { StyleSheet } from 'react-native';

import { layout, colors } from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: layout.defaultContainerWidth,
    alignSelf: 'center'
  },
  contentContainer: {
    paddingTop: 15,
  },
  changePasswordButton: {
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: colors.lightGray
  },
  changePasswordButtonText: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  saveButton: {
    marginVertical: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default styles;