import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { API_URL } from '@/api/API';
import { Button } from '@/components/Button';
import { env } from '@/env';
import { useTranslations } from '@/hooks/useTranslation';
import { TScreenProps } from '@/utils/navigation';

export const HomeScreen: React.FC<TScreenProps> = ({ route, navigation }) => {
  const { t } = useTranslations();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate('SecondScreen');
        }}
        text="Second screen"
      />
      <Text style={{ fontFamily: 'Inter-Thin' }}>
        APP NAME: {env.EXPO_PUBLIC_EAS_PROJECT_ID}
        {t('HomeScreen.title')}
        {API_URL}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
