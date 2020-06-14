import { StyleSheet } from 'react-native';
import { layout } from '@utils';

const styles = StyleSheet.create({
    container: {
      height: layout.screenHeight/1.5,
      width: layout.defaultContainerWidth,
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center'
    },
    image: {
      width: 150,
      height: 150
    }
});

export default styles