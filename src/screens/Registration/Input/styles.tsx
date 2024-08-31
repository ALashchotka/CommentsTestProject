import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../../constants/styles';

export default StyleSheet.create({
  input: {
    color: PRIMARY_COLOR,
    backgroundColor: '#FFFFFF',
    borderColor: '#AAAAAA',
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    width: '100%',
    marginVertical: 8,
  },
  inputFocused: {
    borderColor: PRIMARY_COLOR,
  },
  inputError: {
    borderColor: '#FF0000',
  },
});
