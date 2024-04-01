import { TRootBottomTabsNavigationProps } from '@/navigation/RootBottomTabsNavigation';
import { TRootDrawerNavigationProps } from '@/navigation/RootDrawerNavigation';
import { TRootStackNavigationProps } from '@/navigation/RootStackNavigation';

export type TScreenProps = {
  route: { key: string; name: string };
  navigation: TRootStackNavigationProps &
    TRootDrawerNavigationProps &
    TRootBottomTabsNavigationProps;
};
