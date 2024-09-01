import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Registration from '../screens/Registration';

import { MAIN_SCREEN_NAME, REGISTRATION_SCREEN_NAME, RootStackParamList } from './routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false, headerShown: false }}>
        <Stack.Screen
          name={REGISTRATION_SCREEN_NAME}
          component={Registration}
        />
        <Stack.Screen
          name={MAIN_SCREEN_NAME}
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
