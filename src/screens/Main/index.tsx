import React, { useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, NativeScrollEvent, ScrollView, StatusBar, View } from 'react-native';

import { Comment } from '../../components';
import { createComment } from '../../db/comments';
import { CommentParsed } from '../../db/comments/types';
import { MainScreenProps } from '../../navigation/routes';

import Header from './Header';
import Input from './Input';

import styles from './styles';
import useComments from './useComments';

export default function Main({ route }: MainScreenProps) {
  const { comments, setComments } = useComments();

  const userData = route.params.userData;

  const currentScrollPosition = useRef<number>(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const [commentForReply, setCommentForReply] = useState<CommentParsed>();

  const removeCommentForReply = () => setCommentForReply(undefined);

  const onScrollEnd = ({ nativeEvent }: { nativeEvent: NativeScrollEvent }) => {
    currentScrollPosition.current = nativeEvent.contentOffset.y;
  };

  const onReply = (comment: CommentParsed) => {
    setCommentForReply(comment);
  };

  const onSend = async (text: CommentParsed['text']) => {
    const comment = await createComment(text, userData.id, commentForReply);

    setComments(state => {
      if (comment.rootId) {
        const rootCommentIndex = state.findIndex(item => item.id === comment.rootId);

        state[rootCommentIndex].replies.push(comment);
        state[rootCommentIndex].repliesCount += 1;

        return state;
      } else {
        return [...state, comment];
      }
    });

    removeCommentForReply();
  };

  const renderComment = (item: CommentParsed) => (
    <Comment
      key={`comment_${item.id}`}
      data={item}
      onReply={onReply}
    />
  );

  useEffect(() => {
    const keyboardWillShow = ({ endCoordinates: { height } }: { endCoordinates: { height: number } }) => {
      if (scrollViewRef?.current) {
        scrollViewRef.current.scrollTo({ x: 0, y: currentScrollPosition.current + height, animated: true });
      }
    };

    const keyboardWillHide = ({ endCoordinates: { height } }: { endCoordinates: { height: number } }) => {
      if (scrollViewRef?.current) {
        scrollViewRef.current.scrollTo({ x: 0, y: currentScrollPosition.current - height, animated: true });
      }
    };

    const keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', keyboardWillShow);
    const keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', keyboardWillHide);

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Header />

      <KeyboardAvoidingView
        style={styles.content}
        behavior="padding"
      >
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled"
          scrollEventThrottle={16}
          onScrollEndDrag={onScrollEnd}
          onMomentumScrollEnd={onScrollEnd}
          scrollIndicatorInsets={{ right: 1 }}
        >
          {comments.map(renderComment)}
        </ScrollView>

        <Input
          commentForReply={commentForReply}
          onSend={onSend}
          removeCommentForReply={removeCommentForReply}
          userData={userData}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
