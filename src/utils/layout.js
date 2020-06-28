import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  screenWidth: width,
  screenHeight: height,
  defaultContainerWidth: width/1.2,
  cameraContainerWidth: width/1.18,
  isSmallDevice: width < 375,
};
