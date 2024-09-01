import { CommentParsed } from '../../../db/comments/types';
import { User } from '../../../db/users/types';

export interface InputProps {
  commentForReply?: CommentParsed;
  onSend: (text: CommentParsed['text']) => void;
  userData: User;
}
