import { StyleSheet } from 'react-native';
import { layout, colors } from '@utils';

const styles = StyleSheet.create({
    container: {
      height: layout.screenHeight/1.5,
      width: layout.defaultContainerWidth,
      alignSelf: 'center'
    },
    title: {
      marginVertical: 20,
      fontSize: 18
    },
    pointLineContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    pointItemContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      marginHorizontal: '2.5%',
      width: '28%',
      borderRadius: 10
    },
    pointOn: {
      backgroundColor: colors.tintColor
    },
    pointOff: {
      backgroundColor: '#ddd'
    }
});

export default styles