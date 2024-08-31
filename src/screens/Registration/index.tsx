import React, { useState } from 'react';
import { ActivityIndicator, Alert, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import validator from 'validator';

import * as UsersDB from '../../db/users';
import { User } from '../../db/users/types';

import Input from './Input';
import styles from './styles';

const USERNAME_REGEXP: RegExp = /^[A-Za-z0-9]+$/;

export default function Registration(): React.JSX.Element {
  const [email, setEmail] = useState<User['email']>('');
  const [username, setUsername] = useState<User['username']>('');

  const [errorField, setErrorField] = useState<'email' | 'username' | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  // TODO: add validation and error handling
  const onSubmit = async (): Promise<void> => {
    try {
      setLoading(true);

      if (!validator.isEmail(email)) {
        setErrorField('email');

        return;
      }

      if (!username || USERNAME_REGEXP.test(username)) {
        setErrorField('username');

        return;
      }

      const response = await UsersDB.createUser(email, username);

      Alert.alert('Success', JSON.stringify(response));

      setLoading(false);
    } catch (error) {
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
            placeholder="Nickname"
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
