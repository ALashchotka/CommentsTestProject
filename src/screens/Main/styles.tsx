import { StyleSheet } from 'react-native';

import { scale } from '../../utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    width: '100%',
  },
  contentContainer: {
    paddingVertical: scale(16),
  },
});
