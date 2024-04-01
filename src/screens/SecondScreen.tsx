import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/Button';
import { TScreenProps } from '@/utils/navigation';

export const SecondScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button onPress={() => navigation.goBack()} text="Go back" />
    </View>
  );
};

const styles = StyleSheet.create({});
