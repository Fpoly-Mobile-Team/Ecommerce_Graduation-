import {theme} from '@theme';
import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';

export default StyleSheet.create({
  container: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  box: {boderTopStartRadius: getSize.s(20)},
  image: {alignSelf: 'center'},
});
