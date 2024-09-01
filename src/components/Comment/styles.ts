import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../constants/styles';
import { scale } from '../../utils/scaling';

import { AVATAR_DIMENSION } from '../Avatar/styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: scale(4),
    marginHorizontal: scale(16),
  },
  containerReply: {
    marginVertical: 0,
  },

  contentContainer: {
    marginVertical: scale(4),
  },
  contentContainerReply: {
    marginLeft: AVATAR_DIMENSION,
  },

  header: {
    flexDirection: 'row',
  },

  headerContent: {
    marginTop: (AVATAR_DIMENSION - scale(20) - scale(20)) / 2,
    marginLeft: scale(16),
  },

  title: {
    color: '#000000',
    fontSize: scale(14),
    fontWeight: '600',
    minHeight: scale(20),
  },
  text: {
    color: '#000000',
    fontSize: scale(14),
    fontWeight: '400',
    minHeight: scale(20),
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: AVATAR_DIMENSION + scale(16),
  },

  date: {
    color: '#000000',
    fontSize: scale(12),
    fontWeight: '400',
  },

  button: {
    marginLeft: scale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: PRIMARY_COLOR,
    fontSize: scale(14),
    fontWeight: '600',
  },

  repliesContainer: {
    marginVertical: scale(12),
  },

  viewRepliesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: AVATAR_DIMENSION * 2 + scale(32),
    marginTop: scale(8),
  },
  viewRepliesLine: {
    width: 40,
    height: 1,
    backgroundColor: '#333333',
    marginRight: scale(8),
  },
  viewRepliesText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '400',
  },
});
