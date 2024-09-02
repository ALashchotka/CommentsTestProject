import { useCallback, useEffect, useState } from 'react';

import { getAllCommentReplies, getComments, getTotalCommentsCount } from '../../db/comments';
import { CommentParsed } from '../../db/comments/types';

export default function useData() {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [comments, setComments] = useState<CommentParsed[]>([]);

  const isNextPageExists = page + 1 < totalPages;

  const getCommentReplies = async (id: CommentParsed['id']) => {
    const replies = await getAllCommentReplies(id);

    setComments(state => {
      const commentIndex = state.findIndex(comment => comment.id === id);
      const comment = { ...state[commentIndex], replies };

      const newState = [...state];

      newState.splice(commentIndex, 1, comment);

      return newState;
    });
  };

  const requestNextPage = useCallback(async () => {
    const nextPage = page + 1;
    const data = await getComments(nextPage);

    setPage(nextPage);
    setComments(state => {
      return [...state, ...data];
    });
  }, [page]);

  useEffect(() => {
    const requestTotalPages = async () => {
      const data = await getTotalCommentsCount();

      setTotalPages(data);
    };

    const requestComments = async () => {
      const data = await getComments(0);

      setComments(data);
    };

    requestTotalPages();
    requestComments();
  }, []);

  return { comments, isNextPageExists, getCommentReplies, requestNextPage, setComments };
}
