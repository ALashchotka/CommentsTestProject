import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../../constants/styles';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(12),
    width: '100%',
    borderColor: '#EAEAEA',
    borderTopWidth: 1,
  },

  replyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: scale(40),
    marginBottom: scale(8),
    paddingLeft: scale(8),
    borderColor: PRIMARY_COLOR,
    borderLeftWidth: 2,
  },
  replyText: {
    flex: 1,
    color: '#666666',
    fontSize: scale(14),
    fontWeight: '400',
  },
  replyCloseIcon: {
    color: PRIMARY_COLOR,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    color: '#000000',
    fontSize: scale(14),
    fontWeight: '400',
    backgroundColor: '#EAEAEA',
    borderColor: '#EAEAEA',
    borderRadius: scale(24),
    borderWidth: 1,
    paddingVertical: scale(16),
    paddingLeft: scale(16),
    paddingRight: scale(48),
    minHeight: scale(48),
    maxHeight: scale(100),
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
