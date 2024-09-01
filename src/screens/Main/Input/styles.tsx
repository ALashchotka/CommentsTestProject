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

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    color: '#000000',
    borderColor: '#AAAAAA',
    borderRadius: scale(48),
    borderWidth: 1,
    paddingVertical: scale(16),
    paddingLeft: scale(16),
    paddingRight: scale(48),
    height: scale(48),
    marginLeft: scale(16),
  },
  inputFocused: {
    borderColor: PRIMARY_COLOR,
  },
  inputError: {
    borderColor: '#FF0000',
  },

  button: {
    position: 'absolute',
    right: scale(8),
  },
  buttonIcon: {
    color: PRIMARY_COLOR,
  },
});
