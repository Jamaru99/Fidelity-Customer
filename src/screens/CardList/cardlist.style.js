import { StyleSheet } from 'react-native';
import { layout, colors } from '@utils';

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
    },
    cardItemContainer: {
      width: '100%',
      height: 60,
      marginTop: 15,
      backgroundColor: colors.tabIconDefault
    }
});

export default styles