import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../../constants/styles';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    padding: scale(16),
    width: '100%',
    borderColor: '#AAAAAA',
    borderTopWidth: 1,
  },
  input: {
    color: '#000000',
    backgroundColor: '#EEEEEE',
    borderColor: '#AAAAAA',
    borderRadius: scale(8),
    borderWidth: 1,
    padding: scale(16),
    width: '100%',
    marginVertical: scale(8),
    height: 48,
  },
  inputFocused: {
    borderColor: PRIMARY_COLOR,
  },
  inputError: {
    borderColor: '#FF0000',
  },
});
