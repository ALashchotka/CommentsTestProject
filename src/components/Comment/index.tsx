import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { CommentParsed } from '../../db/comments/types';

import styles from './styles';

export default function Comment({
  data,
  onReply,
}: {
  data: CommentParsed;
  onReply: (comment: CommentParsed) => void;
}): React.JSX.Element {
  const renderComment = (item: CommentParsed) => {
    const hasReplies = !!item.replies?.length;

    return (
      <View
        style={styles.container}
        key={`Comment_${item.id}`}
      >
        <View style={styles.content}>
          <Text style={styles.title}>{item.username}</Text>
          <Text style={styles.text}>{item.text}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onReply(item)}
          >
            <Text style={styles.buttonText}>Reply</Text>
          </TouchableOpacity>
        </View>

        {!!hasReplies && <View style={styles.repliesContainer}>{item.replies?.map(renderComment)}</View>}
      </View>
    );
  };

  return renderComment(data);
}
