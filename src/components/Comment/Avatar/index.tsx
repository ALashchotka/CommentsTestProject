import React from 'react';
import { Text, View } from 'react-native';

import { stringToColor } from '../../../utils/colors';

import styles from './styles';
import { Props } from './types';

export default function Avatar({ username, userId }: Props): React.JSX.Element {
  return (
    <View style={[styles.container, { backgroundColor: stringToColor(`${userId}${username}`) }]}>
      <Text style={styles.username}>{username[0]}</Text>
    </View>
  );
}
