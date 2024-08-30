import { connectToDatabase } from '..';

import { User } from './types';

export const createTable = async () => {
  try {
    const db = await connectToDatabase();

    const query = `
      CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE
      );
    `;

    await db.executeSql(query);
  } catch (error) {
    console.error(error);
    throw Error('Failed to create Users table');
  }
};

export const createUser = async (email: User['email'], username: User['username']) => {
  try {
    const db = await connectToDatabase();

    const insertQuery = `
      INSERT INTO Users (email, username)
      VALUES (?, ?)
    `;

    const values = [email, username];

    return db.executeSql(insertQuery, values);
  } catch (error) {
    console.error(error);
    throw Error('Failed to create user in database (Users table)');
  }
};
