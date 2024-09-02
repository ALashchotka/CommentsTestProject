import { CommentParsed } from '../../db/comments/types';

export interface CommentProps {
  data: CommentParsed;
  getCommentReplies?: (id: CommentParsed['id']) => void;
  onReply: (comment: CommentParsed) => void;
}
