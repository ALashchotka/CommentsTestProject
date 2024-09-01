import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Avatar } from '../../../components';
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

  useEffect(() => {
    if (commentForReply && textInputRef?.current) {
      textInputRef.current.focus();
    }
  }, [commentForReply]);

  return (
    <View style={styles.container}>
      {!!commentForReply && (
        <View style={styles.replyContainer}>
          <Text
            style={styles.replyText}
            numberOfLines={2}
          >
            {commentForReply.text}
          </Text>

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={removeCommentForReply}
            hitSlop={HIT_SLOP}
          >
            <Ionicons
              style={styles.replyCloseIcon}
              size={20}
              name="close"
            />
          </TouchableOpacity>
        </View>
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
