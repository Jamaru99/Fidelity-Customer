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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 35,
    width: layout.defaultContainerWidth,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  cancelModalButton: {
    marginTop: 5,
    alignSelf: "center",
  },
  logoutButton: {
    paddingHorizontal: 12,
    paddingTop: 5,
    paddingBottom: 15,
    alignSelf: "center",
  },
  cancelModalText: {
    color: colors.tintColor,
    fontSize: 14,
  }
});

export default styles;