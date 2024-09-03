import React, { useEffect, useRef, useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Avatar, Reply } from '../../../components';
import { HIT_SLOP } from '../../../constants/styles';
import { CommentParsed } from '../../../db/comments/types';
import { scale } from '../../../utils/scaling';

import styles from './styles';
import { InputProps } from './types';

export default function Input({
  commentForReply,
  onSend,
  removeCommentForReply,
  userData,
}: InputProps): React.JSX.Element {
  const textInputRef = useRef<TextInput>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const [text, setText] = useState<CommentParsed['text']>('');

  const onPress = async (): Promise<void> => {
    try {
      if (!text) {
        Alert.alert('Error', 'Comment cannot be empty.');

        return;
      }

      setLoading(true);

      await onSend(text);

      setText('');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (commentForReply && textInputRef?.current) {
      textInputRef.current.focus();
    }
  }, [commentForReply]);

  return (
    <View style={styles.container}>
      {!!commentForReply && (
        <Reply
          text={commentForReply.text}
          onRemove={removeCommentForReply}
        />
      )}

      <View style={styles.content}>
        <Avatar
          username={userData.username}
          userId={userData.id}
        />

        <TextInput
          ref={textInputRef}
          style={[styles.input, isFocused && styles.inputFocused]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setText}
          value={text}
          placeholderTextColor="#999999"
          placeholder="Add a comment"
          multiline
        />

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={onPress}
          hitSlop={HIT_SLOP}
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
