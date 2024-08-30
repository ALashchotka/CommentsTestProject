import React, { useState } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Input from './Input';
import styles from './styles';

export default function Registration(): React.JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = (): void => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            type="email"
          />

          <Input
            placeholder="Nickname"
            onChangeText={setUserName}
            value={userName}
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
