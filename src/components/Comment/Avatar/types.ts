import { CommentParsed } from '../../../db/comments/types';

export interface Props {
  username: CommentParsed['username'];
  userId: CommentParsed['userId'];
}
