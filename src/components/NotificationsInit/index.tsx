import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useEffect, useRef, useState } from 'react';
import { Platform, Text, View } from 'react-native';

import { env } from '@/env';
import {
  consoleError,
  consoleInfo,
  consoleSuccess,
  consoleWarn,
} from '@/utils/console';

import { Button } from '../Button';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function sendPushNotification(expoPushToken: string) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      consoleError('Failed to get push token for push notification!');
      return;
    }

    if (!env.EXPO_PUBLIC_EAS_PROJECT_ID) {
      consoleError('Missing EAS project ID for push notification');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: env.EXPO_PUBLIC_EAS_PROJECT_ID,
    });
    consoleSuccess('Push Token: ' + token.data);
  } else {
    // consoleError('Must use physical device for Push Notifications');
  }

  return token?.data;
}

export const NotificationsInit = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>('');
  const [notification, setNotification] =
    useState<Notifications.Notification | null>(null);

  const notificationListener = useRef<Notifications.Subscription | null>(null);
  const responseListener = useRef<Notifications.Subscription | null>(null);
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        consoleInfo('Notification: ' + JSON.stringify(notification));
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        consoleInfo('Notification response: ' + JSON.stringify(response));
      });

    return () => {
      // Properly remove the notification subscriptions
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  return null;
  // return (
  //   <View
  //     style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}
  //   >
  //     <Text>Your expo push token: {expoPushToken}</Text>
  //     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>
  //         Title: {notification && notification.request.content.title}{' '}
  //       </Text>
  //       <Text>Body: {notification && notification.request.content.body}</Text>
  //       <Text>
  //         Data:{' '}
  //         {notification && JSON.stringify(notification.request.content.data)}
  //       </Text>
  //     </View>
  //     {expoPushToken && (
  //       <Button
  //         text="Press to Send Notification"
  //         onPress={async () => {
  //           await sendPushNotification(expoPushToken);
  //         }}
  //       />
  //     )}
  //   </View>
  // );
};
