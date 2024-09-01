import { useEffect, useState } from 'react';

import { getComments } from '../../db/comments';
import { CommentParsed } from '../../db/comments/types';

export default function useData() {
  const [comments, setComments] = useState<CommentParsed[]>([]);

  useEffect(() => {
    const requestComments = async () => {
      const data = await getComments();

      setComments(data);
    };

    requestComments();
  }, []);

  return { comments, setComments };
}
