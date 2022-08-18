import {StyleSheet} from 'react-native';
import {getWidth} from '~/libs/crossDevice';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  notchStyle: {
    flex: 0,
    backgroundColor: '#ffffff',
  },
  titleBar: {
    width: getWidth(2),
    height: 19,
    backgroundColor: '#CABDA1',
  },
});
