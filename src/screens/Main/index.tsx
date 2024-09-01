import React, { useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StatusBar, View } from 'react-native';

import { Comment } from '../../components';
import { createComment } from '../../db/comments';
import { CommentParsed } from '../../db/comments/types';
import { MainScreenProps } from '../../navigation/routes';

import Input from './Input';

import styles from './styles';
import useComments from './useComments';

export default function Main({ route }: MainScreenProps) {
  const { comments, setComments } = useComments();

  const userData = route.params.userData;

  const [commentForReply, setCommentForReply] = useState<CommentParsed>();

  const onReply = (comment: CommentParsed) => {
    setCommentForReply(comment);
  };

  const onSend = async (text: CommentParsed['text']) => {
    const comment = await createComment(text, userData.id, commentForReply);

    setComments(state => {
      if (comment.rootId) {
        const rootCommentIndex = state.findIndex(item => item.id === comment.rootId);

        state[rootCommentIndex].replies.push(comment);

        return state;
      } else {
        return [...state, comment];
      }
    });

    setCommentForReply(undefined);
  };

  const renderComment = (item: CommentParsed) => (
    <Comment
      key={`comment_${item.id}`}
      data={item}
      onReply={onReply}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        style={{ flex: 1, width: '100%' }}
        behavior="padding"
      >
        <ScrollView>{comments.map(renderComment)}</ScrollView>
        <Input
          commentForReply={commentForReply}
          onSend={onSend}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
