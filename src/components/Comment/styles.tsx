import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../constants/styles';
import { scale } from '../../utils/scaling';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  content: {
    padding: scale(16),
    margin: scale(16),
    borderWidth: 1,
  },
  title: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  text: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: PRIMARY_COLOR,
    padding: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
  },

  repliesContainer: {
    marginLeft: 32,
  },
});
