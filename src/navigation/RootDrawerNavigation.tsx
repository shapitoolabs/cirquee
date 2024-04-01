import { Button, View } from 'react-native';

import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';

export type TRootDrawerParamList = {
  HomeScreen: undefined;
  SecondScreen: {
    // userId: string
  };
};

export type TRootDrawerNavigationProps =
  DrawerScreenProps<TRootDrawerParamList>['navigation'];

const Drawer = createDrawerNavigator<TRootDrawerParamList>();

export default function RootDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeScreen">
        <Drawer.Screen name="HomeScreen" options={{ headerShown: true }}>
          {(props) => <HomeScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="SecondScreen" options={{ headerShown: true }}>
          {(props) => <SecondScreen {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
