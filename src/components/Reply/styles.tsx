import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../constants/styles';
import { scale } from '../../utils/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(8),
    paddingLeft: scale(8),
    borderColor: PRIMARY_COLOR,
    borderLeftWidth: 2,
  },
  text: {
    flex: 1,
    color: '#666666',
    fontSize: scale(14),
    fontWeight: '400',
  },
  closeIcon: {
    color: PRIMARY_COLOR,
  },
});
