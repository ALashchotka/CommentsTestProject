import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HIT_SLOP } from '../../constants/styles';

import styles from './styles';
import { ReplyProps } from './types';

export default function Reply({ text, onRemove, style }: ReplyProps): React.JSX.Element {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={styles.text}
        numberOfLines={2}
      >
        {text}
      </Text>

      {!!onRemove && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onRemove}
          hitSlop={HIT_SLOP}
        >
          <Ionicons
            style={styles.closeIcon}
            size={20}
            name="close"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
