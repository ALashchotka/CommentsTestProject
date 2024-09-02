import { User } from '../users/types';

export interface CommentFromDB {
  id: number;
  text: string;
  date: string;
  userId: User['id'];
  repliesCount: number;
  rootId?: CommentFromDB['id'];
  parentId?: CommentFromDB['id'];
}

export interface CommentParsed extends CommentFromDB {
  replies: CommentParsed[];
  username: User['username'];
}

export interface CommentFromDBWithReplyData extends CommentFromDB {
  username: CommentParsed['username'];
  r_id: CommentFromDB['id'];
  r_text: CommentFromDB['text'];
  r_date: CommentFromDB['date'];
  r_userId: CommentFromDB['userId'];
  r_repliesCount: CommentFromDB['repliesCount'];
  r_rootId: CommentFromDB['rootId'];
  r_parentId: CommentFromDB['parentId'];
}
