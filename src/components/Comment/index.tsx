import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { CommentParsed } from '../../db/comments/types';

import Avatar from '../Avatar';

import styles from './styles';

export default function Comment({
  data,
  onReply,
}: {
  data: CommentParsed;
  onReply: (comment: CommentParsed) => void;
}): React.JSX.Element {
  const renderComment = (item: CommentParsed, isReply: boolean) => {
    const hasReplies = !!item.replies?.length;

    return (
      <View
        style={[styles.container, isReply && styles.containerReply]}
        key={`Comment_${item.id}`}
      >
        <View style={[styles.contentContainer, isReply && styles.contentContainerReply]}>
          <View style={styles.header}>
            <Avatar
              username={data.username}
              userId={data.userId}
            />

            <View style={styles.headerContent}>
              <Text style={styles.title}>{item.username}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </View>

          <View style={styles.footer}>
            <Text style={styles.date}>{moment(item.date).format('DD.MM.YYYY in HH:mm')}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => onReply(item)}
            >
              <Ionicons
                style={styles.buttonIcon}
                name="arrow-redo"
              />
              <Text style={styles.buttonText}>Reply</Text>
            </TouchableOpacity>
          </View>

          {!!hasReplies && (
            <View style={styles.repliesContainer}>
              {item.replies?.map(reply => renderComment(reply, true))}

              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.viewRepliesContainer}
                onPress={() => {}}
              >
                <View style={styles.viewRepliesLine} />
                <Text style={styles.viewRepliesText}>View {item.repliesCount - item.replies.length} replies</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return renderComment(data, false);
}
