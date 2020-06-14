import { StyleSheet } from 'react-native';
import { layout } from '@utils';

const styles = StyleSheet.create({
    container: {
      height: layout.screenHeight/1.5,
      width: layout.defaultContainerWidth,
      alignSelf: 'center',
      marginTop: 20
    },
    button: {
      marginTop: 20,
      marginBottom: 10
    }
});

export default styles