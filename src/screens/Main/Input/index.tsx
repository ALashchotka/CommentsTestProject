import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Avatar } from '../../../components';
import { CommentParsed } from '../../../db/comments/types';
import { scale } from '../../../utils/scaling';

import styles from './styles';
import { InputProps } from './types';

export default function Input({ commentForReply, onSend, userData }: InputProps): React.JSX.Element {
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

      <View style={styles.content}>
        <Avatar
          username={userData.username}
          userId={userData.id}
        />

        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setText}
          value={text}
          placeholderTextColor="#AAAAAA"
          placeholder="Add a comment"
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={onPress}
          disabled={isLoading}
        >
          <Ionicons
            style={styles.buttonIcon}
            name="arrow-forward-circle-outline"
            size={scale(36)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
