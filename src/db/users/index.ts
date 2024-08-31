import { connectToDatabase } from '..';

import { User } from './types';

export const createTable = async (): Promise<void> => {
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

export const getUserById = async (id: User['id']): Promise<User> => {
  try {
    const db = await connectToDatabase();

    const query = `
      SELECT * FROM Users WHERE id = ?
    `;

    const values = [id];

    const data = await db.executeSql(query, values);

    return data[0].rows.item(0);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get user by id from database (Users table)');
  }
};

export const getUserByEmail = async (email: User['email']): Promise<User> => {
  try {
    const db = await connectToDatabase();

    const query = `
      SELECT * FROM Users WHERE email = ?
    `;

    const values = [email];

    const data = await db.executeSql(query, values);

    return data[0].rows.item(0);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get user by email from database (Users table)');
  }
};

export const getUserByUsername = async (username: User['username']): Promise<User> => {
  try {
    const db = await connectToDatabase();

    const query = `
      SELECT * FROM Users WHERE username = ?
    `;

    const values = [username];

    const data = await db.executeSql(query, values);

    return data[0].rows.item(0);
  } catch (error) {
    console.error(error);
    throw Error('Failed to get user by username from database (Users table)');
  }
};

export const createUser = async (email: User['email'], username: User['username']): Promise<User> => {
  try {
    const db = await connectToDatabase();

    const query = `
      INSERT INTO Users (email, username)
      VALUES (?, ?)
    `;

    const values = [email, username];

    const data = await db.executeSql(query, values);

    return data[0].rows.item(0);
  } catch (error) {
    console.error(error);
    throw Error('Failed to create user in database (Users table)');
  }
};
