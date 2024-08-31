import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../constants/styles';
import { scale } from '../../utils/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
  },

  keyboardAwareContainer: {
    width: '100%',
  },
  keyboardAwareContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    marginHorizontal: scale(16),
    marginBottom: scale(32),
  },

  title: {
    color: '#FFFFFF',
    fontSize: scale(20),
    fontWeight: '600',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: scale(14),
    fontWeight: '300',
    marginTop: scale(16),
  },

  contentContainer: {
    width: '90%',
    paddingHorizontal: scale(16),
    paddingVertical: scale(8),
    borderRadius: scale(16),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginVertical: scale(8),
    borderRadius: scale(8),
    padding: scale(16),
    backgroundColor: PRIMARY_COLOR,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: scale(14),
    color: '#FFFFFF',
    fontWeight: '500',
  },
  buttonTextLoading: {
    opacity: 0,
  },
  buttonLoadingIndicator: {
    position: 'absolute',
  },
});
