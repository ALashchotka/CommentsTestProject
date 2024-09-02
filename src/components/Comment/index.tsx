import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HIT_SLOP } from '../../constants/styles';
import { CommentParsed } from '../../db/comments/types';

import Avatar from '../Avatar';
import Reply from '../Reply';

import styles from './styles';

export default function Comment({
  data,
  onReply,
}: {
  data: CommentParsed;
  onReply: (comment: CommentParsed) => void;
}): React.JSX.Element {
  const renderReplies = (item: CommentParsed) => {
    const hasReplies = !!item.replies?.length;

    if (!hasReplies) {
      return null;
    }

    const showReplies = data.repliesCount - data.replies.length > 0;

    return (
      <View style={styles.repliesContainer}>
        {item.replies.map(reply => renderComment(reply, true))}

        {showReplies && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.viewRepliesContainer}
            onPress={() => {}}
            hitSlop={HIT_SLOP}
          >
            <View style={styles.viewRepliesLine} />
            <Text style={styles.viewRepliesText}>View {data.repliesCount - data.replies.length} replies</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  const renderComment = (item: CommentParsed, isReply: boolean) => {
    const replyText =
      item.parentId === item.rootId ? data.text : data.replies.find(reply => reply.id === item.parentId)?.text;

    return (
      <View
        style={[styles.container, isReply && styles.containerReply]}
        key={`Comment_${item.id}`}
      >
        <View style={[styles.contentContainer, isReply && styles.contentContainerReply]}>
          <View style={styles.header}>
            <Avatar
              username={item.username}
              userId={item.userId}
            />

            <View style={styles.headerContent}>
              <Text style={styles.title}>{item.username}</Text>

              {isReply && !!replyText && (
                <Reply
                  style={styles.replyContainer}
                  text={replyText}
                />
              )}

              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.date}>{item.date}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => onReply(item)}
              hitSlop={HIT_SLOP}
            >
              <Ionicons
                style={styles.buttonIcon}
                name="arrow-redo"
              />
              <Text style={styles.buttonText}>Reply</Text>
            </TouchableOpacity>
          </View>

          {renderReplies(item)}
        </View>
      </View>
    );
  };

  return renderComment(data, false);
}
