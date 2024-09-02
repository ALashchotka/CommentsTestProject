import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { LoadNextPageButtonProps } from './types';

export default function LoadNextPageButton({
  isNextPageExists,
  onPress,
}: LoadNextPageButtonProps): React.JSX.Element | null {
  if (!isNextPageExists) {
    return null;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.title}>View more comments</Text>
    </TouchableOpacity>
  );
}
