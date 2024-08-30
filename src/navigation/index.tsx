import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../screens/Main';
import Registration from '../screens/Registration';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={Registration}
        />
        <Stack.Screen
          name="Main"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
