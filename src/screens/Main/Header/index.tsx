import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { HIT_SLOP } from '../../../constants/styles';
import { scale } from '../../../utils/scaling';

import styles from './styles';

export default function Header(): React.JSX.Element {
  const navigation = useNavigation();

  const onLogout = (): void => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer} />
      <Text style={styles.title}>Comments list</Text>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={onLogout}
        hitSlop={HIT_SLOP}
      >
        <Ionicons
          style={styles.icon}
          name="exit-outline"
          size={scale(22)}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
