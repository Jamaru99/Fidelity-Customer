
import { StyleSheet } from 'react-native';

import { layout, colors } from '@utils';

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    width: layout.cameraContainerWidth,
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 2,
    backgroundColor: opacity
  },
  focused: {
    flex: 5
  },
  layerRight: {
    flex: 2,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity
  },
});

export default styles;