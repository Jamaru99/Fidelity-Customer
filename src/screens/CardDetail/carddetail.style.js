import { StyleSheet } from 'react-native';
import { layout, colors } from '@utils';

const styles = StyleSheet.create({
    container: {
      height: layout.screenHeight/1.5,
      width: layout.defaultContainerWidth,
      alignSelf: 'center'
    },
    image: {
      width: 150,
      height: 150
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
      flex: 1,
      backgroundColor: colors.tintColor
    }
});

export default styles