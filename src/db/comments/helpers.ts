import { CommentFromDBWithReplyData, CommentParsed } from './types';

export const parseComment = (comment: CommentFromDBWithReplyData): CommentParsed => {
  const parsedComment: CommentParsed = {
    id: comment.id,
    text: comment.text,
    date: comment.date,
    userId: comment.userId,
    repliesCount: comment.repliesCount,
    rootId: comment.rootId,
    parentId: comment.parentId,
    username: comment.username,
    replies: [],
  };

  if (comment.r_id) {
    parsedComment.replies = [
      {
        id: comment.r_id,
        text: comment.r_text,
        date: comment.r_date,
        userId: comment.r_userId,
        repliesCount: comment.r_repliesCount,
        rootId: comment.r_rootId,
        parentId: comment.r_parentId,
        username: comment.username,
        replies: [],
      },
    ];
  }

  return parsedComment;
};
