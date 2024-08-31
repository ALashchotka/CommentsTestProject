import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, Keyboard, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import validator from 'validator';

import { User } from '../../db/users/types';
import { MAIN_SCREEN_NAME, RegistrationScreenProps } from '../../navigation/routes';

import Input from './Input';

import { createUser } from './helpers';
import styles from './styles';

const USERNAME_REGEXP: RegExp = /^[A-Za-z0-9]+$/;

export default function Registration({ navigation }: RegistrationScreenProps): React.JSX.Element {
  const [email, setEmail] = useState<User['email']>('');
  const [username, setUsername] = useState<User['username']>('');

  const [errorField, setErrorField] = useState<'email' | 'username' | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async (): Promise<void> => {
    try {
      Keyboard.dismiss();

      setLoading(true);

      if (!validator.isEmail(email)) {
        setErrorField('email');

        Alert.alert(
          'Email Validation Error',
          'Invalid email. Please check the entered address for correctness and try again.',
        );

        return;
      }

      if (!username || !USERNAME_REGEXP.test(username)) {
        setErrorField('username');

        Alert.alert(
          'Username Validation Error',
          'Invalid username. Please ensure the username contains ' +
            'only letters (Latin alphabet) and numbers, and try again.',
        );

        return;
      }

      const userData = await createUser(email, username);

      navigation.navigate(MAIN_SCREEN_NAME, { userData });

      setLoading(false);
    } catch (error) {
      Alert.alert(
        'Conflict Between Email and Username',
        'The provided email is already registered with a different username, ' +
          'or the username is already associated with another email. ' +
          'Please check your information and try again',
      );

      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image
        style={styles.backgroundImage}
        source={require('./background.jpg')}
      />

      <KeyboardAwareScrollView
        style={styles.keyboardAwareContainer}
        contentContainerStyle={styles.keyboardAwareContent}
        extraHeight={100}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Sign Up to leave few nasty comments and discuss some real gangsta shit.</Text>
        </View>

        <View style={styles.contentContainer}>
          <Input
            isError={errorField === 'email'}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            type="email"
          />

          <Input
            isError={errorField === 'username'}
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
            type="username"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={onSubmit}
            disabled={isLoading}
            activeOpacity={0.6}
          >
            <Text style={[styles.buttonText, isLoading && styles.buttonTextLoading]}>Sign Up</Text>
            {isLoading && (
              <ActivityIndicator
                color="#FFFFFF"
                style={styles.buttonLoadingIndicator}
              />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
