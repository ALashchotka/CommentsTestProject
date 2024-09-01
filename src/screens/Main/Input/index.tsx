import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { CommentParsed } from '../../../db/comments/types';

import styles from './styles';
import { InputProps } from './types';

export default function Input({ commentForReply, onSend }: InputProps): React.JSX.Element {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const [text, setText] = useState<CommentParsed['text']>('');

  const onPress = async () => {
    try {
      setLoading(true);

      await onSend(text);

      setText('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!!commentForReply && <Text>{commentForReply.text}</Text>}

      <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setText}
        value={text}
        placeholderTextColor="#AAAAAA"
      />

      <TouchableOpacity
        onPress={onPress}
        disabled={isLoading}
      >
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
