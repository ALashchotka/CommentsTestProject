import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { User } from '../db/users/types';

export const REGISTRATION_SCREEN_NAME = 'Registration';
export const MAIN_SCREEN_NAME = 'Main';

export type RootStackParamList = {
  [REGISTRATION_SCREEN_NAME]: undefined;
  [MAIN_SCREEN_NAME]: { userData: User };
};

export type RegistrationScreenProps = NativeStackScreenProps<RootStackParamList, typeof REGISTRATION_SCREEN_NAME>;
export type MainScreenProps = NativeStackScreenProps<RootStackParamList, typeof MAIN_SCREEN_NAME>;
