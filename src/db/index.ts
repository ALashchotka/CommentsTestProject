import SQLite from 'react-native-sqlite-storage';

import { createTable as createUsersTable } from './users';

SQLite.enablePromise(true);
SQLite.DEBUG(true);

const initializeDatabase = async () => {
  try {
    await createUsersTable();
  } catch (error) {
    console.error(error);
    throw Error('Could not initialize database');
  }
};

export const connectToDatabase = async () => {
  return SQLite.openDatabase(
    { name: 'CommentsTestProject.db', location: 'default' },
    () => {
      initializeDatabase();
    },
    error => {
      console.error(error);
      throw Error('Could not connect to database');
    },
  );
};
