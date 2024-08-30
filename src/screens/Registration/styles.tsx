import { StyleSheet } from 'react-native';

import { PRIMARY_COLOR } from '../../constants/styles';

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
    position: 'absolute',
    top: '10%',
    marginHorizontal: 16,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '300',
    marginTop: 16,
  },

  contentContainer: {
    width: '90%',
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
    backgroundColor: PRIMARY_COLOR,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
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
