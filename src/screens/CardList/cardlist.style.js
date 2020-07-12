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
    cardItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 60,
      marginTop: 15,
      borderRadius: 10,
      backgroundColor: '#ddd'
    },
    cardItemIcon: {
      width: 50,
      height: 50,
      marginHorizontal: 5
    },
    cardItemText: {
      fontWeight: 'bold'
    }
});

export default styles