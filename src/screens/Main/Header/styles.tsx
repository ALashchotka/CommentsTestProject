import { StyleSheet } from 'react-native';

import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: scale(12),
    width: '100%',
    borderColor: '#EAEAEA',
    borderBottomWidth: 1,
  },

  iconContainer: {
    width: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#000000',
  },

  title: {
    color: '#000000',
    fontSize: scale(18),
    fontWeight: '600',
  },
});
