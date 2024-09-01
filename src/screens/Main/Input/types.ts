import { CommentParsed } from '../../../db/comments/types';

export interface InputProps {
  commentForReply?: CommentParsed;
  onSend: (text: CommentParsed['text']) => void;
}
