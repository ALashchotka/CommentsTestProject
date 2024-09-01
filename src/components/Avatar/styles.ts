import { StyleSheet } from 'react-native';

import { scale } from '../../utils/scaling';

export const AVATAR_DIMENSION = scale(40);

export default StyleSheet.create({
  container: {
    width: AVATAR_DIMENSION,
    height: AVATAR_DIMENSION,
    borderRadius: AVATAR_DIMENSION,
    alignItems: 'center',
    justifyContent: 'center',
  },
  username: {
    color: '#FFFFFF',
    fontFamily: '500',
    fontSize: scale(20),
  },
});
