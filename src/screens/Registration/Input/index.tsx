import React, { useState } from 'react';
import { TextInput } from 'react-native';

import styles from './styles';
import { InputProps, PROPS_BY_TYPE } from './types';

export default function Input({ isError, type, ...restProps }: InputProps): React.JSX.Element {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const propsByType = type ? PROPS_BY_TYPE[type] : {};

  return (
    <TextInput
      style={[styles.input, isError && styles.inputError, isFocused && styles.inputFocused]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholderTextColor="#AAAAAA"
      {...propsByType}
      {...restProps}
    />
  );
}
