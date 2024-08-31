import * as UsersDB from '../../db/users';
import { User } from '../../db/users/types';

export const createUser = async (email: User['email'], username: User['username']) => {
  try {
    const [userByEmail, userByUsername] = await Promise.all([
      UsersDB.getUserByEmail(email),
      UsersDB.getUserByUsername(username),
    ]);

    // create a new user, if there is no registered email address and username
    if (!userByEmail && !userByUsername) {
      await UsersDB.createUser(email, username);

      const createdUser = await UsersDB.getUserByEmail(email);

      return createdUser;
    }

    // authorize the user if the email and username belong to the same user by id
    if (userByEmail?.id === userByUsername?.id) {
      return userByEmail;
    } else {
      // error when email.id !== username.id OR !email user OR !username user
      throw Error('Wrong Email or Username');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
