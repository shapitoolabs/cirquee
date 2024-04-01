import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';

export type TRootStackParamList = {
  HomeScreen: undefined;
  SecondScreen: {
    // userId: string;
  };
};

export type TRootStackNavigationProps =
  NativeStackScreenProps<TRootStackParamList>['navigation'];

const Stack = createNativeStackNavigator<TRootStackParamList>();

export default function RootStackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" options={{ headerShown: true }}>
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="SecondScreen">
          {(props) => <SecondScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
