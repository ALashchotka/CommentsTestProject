import { TextInputProps } from 'react-native';

export type TextInputType = 'email' | 'username';

export interface InputProps extends TextInputProps {
  isError: boolean;
  type?: TextInputType;
}

export const PROPS_BY_TYPE: Record<TextInputType, TextInputProps> = {
  email: {
    autoCapitalize: 'none',
    autoComplete: 'email',
    keyboardType: 'email-address',
    inputMode: 'email',
    textContentType: 'emailAddress',
  },
  username: {
    autoComplete: 'nickname',
  },
} as const;
