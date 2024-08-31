import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

type TextInputType = 'email' | 'username';

interface Props extends TextInputProps {
  isError: boolean;
  type?: TextInputType;
}

const PROPS_BY_TYPE: Record<TextInputType, TextInputProps> = {
  email: {
    autoCapitalize: 'none',
    autoComplete: 'email',
    keyboardType: 'email-address',
    inputMode: 'email',
    textContentType: 'emailAddress',
  },
  username: {},
} as const;

// TODO: add UI for error
export default function Input(props: Props): React.JSX.Element {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const propsByType = props.type ? PROPS_BY_TYPE[props.type] : {};

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor="#AAAAAA"
      {...propsByType}
      {...props}
    />
  );
}
