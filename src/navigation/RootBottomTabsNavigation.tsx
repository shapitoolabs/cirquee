import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from '../screens/HomeScreen';
import { SecondScreen } from '../screens/SecondScreen';

export type TRootTabsParamList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
  // HomeScreen: { userId: string };
};

export type TRootBottomTabsNavigationProps =
  BottomTabScreenProps<TRootTabsParamList>['navigation'];

const Tab = createBottomTabNavigator();

export default function RootBottomTabsNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SecondScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
