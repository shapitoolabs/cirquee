import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import axios from 'axios';

import { API_URL } from '@/api/API';
import { Button } from '@/components/Button';
import { env } from '@/env';
import { useTranslations } from '@/hooks/useTranslation';
import { TScreenProps } from '@/utils/navigation';

export const HomeScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const [thez, setThez] = React.useState<string>('');
  const [jezdeckasocha, setJezdeckasocha] = React.useState<string>('');

  const loadDataThez = () => {
    axios.get('https://ip.thez.info/?json').then((res) => {
      alert('.thez ' + JSON.stringify(res.data));
      setThez(JSON.stringify(res.data));
    });
  };

  const loadDataJezdeckasocha = () => {
    axios.get('https://jezdeckasocha.cz/?json').then((res) => {
      alert('.jezdeckasocha ' + JSON.stringify(res.data));
      setJezdeckasocha(JSON.stringify(res.data));
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
        <Text>Ahoj</Text>
        <Text>{thez}</Text>
        <Text>{jezdeckasocha}</Text>

        <Button text="Load .thez" onPress={loadDataThez} />
        <Button text="Load .jezdeckasocha" onPress={loadDataJezdeckasocha} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
