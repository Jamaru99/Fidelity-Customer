import { StyleSheet } from 'react-native';
import { layout, colors } from '@utils';

const styles = StyleSheet.create({
    container: {
      height: layout.screenHeight,
      width: layout.defaultContainerWidth,
      alignSelf: 'center',
      marginTop: '25%'
    },
    registerContainer: {
      marginTop: 10,
      flexDirection: 'row',
      alignSelf: 'center'
    },
    registerText: {
      color: colors.tintColor,
      textDecorationLine: 'underline'
    },
    errorText: {
      marginTop: 10,
      color: colors.errorText
    }
});

export default styles