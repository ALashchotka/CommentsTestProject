import { ViewStyle } from 'react-native';

import { CommentParsed } from '../../db/comments/types';

export interface ReplyProps {
  text: CommentParsed['text'];
  onRemove?: () => void;
  style?: ViewStyle;
}
