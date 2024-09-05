import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

import { createTable as createCommentsTable } from './comments';
import { createTable as createUsersTable } from './users';

SQLite.enablePromise(true);
SQLite.DEBUG(__DEV__);

export const initializeDatabase = async (): Promise<void> => {
  try {
    await createCommentsTable();
    await createUsersTable();
  } catch (error) {
    console.error(error);
    throw Error('Could not initialize database');
  }
};

export const connectToDatabase = async (): Promise<SQLiteDatabase> => {
  return SQLite.openDatabase(
    { name: 'CommentsTestProject.db', location: 'default' },
    () => {},
    error => {
      console.error(error);
      throw Error('Could not connect to database');
    },
  );
};
