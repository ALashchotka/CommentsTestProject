import { StyleSheet } from 'react-native';

const AVATAR_DIMENSION = 50;

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
    fontSize: 20,
  },
});
