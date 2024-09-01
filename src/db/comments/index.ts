import { connectToDatabase } from '..';

import { parseComment } from './helpers';
import { CommentFromDB, CommentParsed } from './types';

export const createTable = async (): Promise<void> => {
  try {
    const db = await connectToDatabase();

    const query = `
      CREATE TABLE IF NOT EXISTS Comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        date TEXT NOT NULL,
        userId INTEGER NOT NULL,
        repliesCount INTEGER NOT NULL,
        rootId INTEGER,
        parentId INTEGER
      )
    `;

    await db.executeSql(query);
  } catch (error) {
    console.error(error);
    throw Error('Failed to create Comments table');
  }
};

export const getCommentById = async (id: CommentFromDB['id']): Promise<CommentParsed> => {
  try {
    const db = await connectToDatabase();

    const query = `
      SELECT
        c.*,
        u.username,
        r.id AS r_id,
        r.text AS r_text,
        r.date AS r_date,
        r.userId AS r_userId,
        r.repliesCount AS r_repliesCount,
        r.rootId AS r_rootId,
        r.parentId AS r_parentId
      FROM
        Comments c
      JOIN
        Users u ON c.userId = u.id
      LEFT JOIN
        Comments r ON r.rootId = c.id
      WHERE
        c.id = ?
      GROUP BY
        c.id
      ORDER BY
        c.id
    `;

    const values = [id];

    const data = await db.executeSql(query, values);

    const comment = data[0].rows.item(0);
    const parsedComment = parseComment(comment);

    return parsedComment;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get comment by id from database (Comments table)');
  }
};

export const getComments = async (): Promise<CommentParsed[]> => {
  try {
    const db = await connectToDatabase();

    const query = `
      SELECT
        c.*,
        u.username,
        r.id AS r_id,
        r.text AS r_text,
        r.date AS r_date,
        r.userId AS r_userId,
        r.repliesCount AS r_repliesCount,
        r.rootId AS r_rootId,
        r.parentId AS r_parentId
      FROM
        Comments c
      JOIN
        Users u ON c.userId = u.id
      LEFT JOIN
        Comments r ON r.rootId = c.id
      WHERE
        c.rootId IS NULL
      GROUP BY
        c.id
      ORDER BY
        c.id
    `;

    const data = await db.executeSql(query);

    const comments: CommentParsed[] = [];

    data.forEach(({ rows }) => {
      for (let index = 0; index < rows.length; index++) {
        const comment = rows.item(index);
        const parsedComment = parseComment(comment);

        comments.push(parsedComment);
      }
    });

    return comments;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get comments from database (Comments table)');
  }
};

export const updateCommentRepliesCount = async (id: CommentFromDB['id']): Promise<void> => {
  try {
    const db = await connectToDatabase();

    const query = `
      UPDATE Comments
      SET repliesCount = (SELECT COUNT(*)
                          FROM Comments AS replyComments
                          WHERE replyComments.rootId = Comments.id)
      WHERE id = (?)
    `;

    const values = [id];

    await db.executeSql(query, values);
  } catch (error) {
    console.error(error);
    throw Error('Failed to create comment in database (Comments table)');
  }
};

export const createComment = async (
  text: CommentFromDB['text'],
  userId: CommentFromDB['userId'],
  commentForReply?: CommentParsed,
): Promise<CommentParsed> => {
  try {
    const db = await connectToDatabase();

    const query = `
      INSERT INTO Comments (text, date, userId, repliesCount, rootId, parentId)
      VALUES (?, ?, ?, 0, ?, ?)
    `;

    const rootId = commentForReply?.rootId || commentForReply?.id;
    const parentId = commentForReply?.id;

    const values = [text, new Date().toString(), userId, rootId, parentId];

    const data = await db.executeSql(query, values);

    if (rootId) {
      updateCommentRepliesCount(rootId);
    }

    const comment = await getCommentById(data[0].insertId);

    return comment;
  } catch (error) {
    console.error(error);
    throw Error('Failed to create comment in database (Comments table)');
  }
};
