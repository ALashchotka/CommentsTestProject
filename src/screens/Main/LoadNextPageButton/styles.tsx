import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../../constants/styles';
import { scale } from '../../../utils/scaling';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: scale(12),
    paddingHorizontal: scale(48),

    backgroundColor: '#EAEAEA',
    borderRadius: scale(24),
  },

  title: {
    color: PRIMARY_COLOR,
    fontSize: scale(16),
    fontWeight: '500',
  },
});
