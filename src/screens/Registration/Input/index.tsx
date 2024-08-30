import React, { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import styles from './styles';

const EMAIL_PROPS = {
  autoComplete: 'email',
  keyboardType: 'email-address',
  inputMode: 'email',
  textContentType: 'emailAddress',
} as const;

interface Props extends TextInputProps {
  type?: 'email';
}

export default function Input(props: Props): React.JSX.Element {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <TextInput
      style={[styles.input, isFocused && styles.inputFocused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor="#AAAAAA"
      {...props}
      {...(props.type === 'email' ? EMAIL_PROPS : {})}
    />
  );
}
