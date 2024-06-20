import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HouseTabIcon} from 'assets/icons/House';
import TrashIcon from 'assets/icons/Trash';
import {UserLineIcon} from 'assets/icons/User';
import {CommonRoutes} from 'libs/shared/types/enums';
import {TabNavigatorParamList} from 'models/NavigationModel';
import HomeScreen from 'screens/home-screen/HomeScreen';
import ProfileScreen from 'screens/profile-screen';
import TrashScreen from 'screens/trash-screen';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={CommonRoutes.Home}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={CommonRoutes.Home}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <HouseTabIcon />,
        }}
      />

      <Tab.Screen
        name={CommonRoutes.Trash}
        component={TrashScreen}
        options={{
          tabBarIcon: () => <TrashIcon />,
        }}
      />
      <Tab.Screen
        //@ts-ignore
        name={CommonRoutes.Profile}
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <UserLineIcon />,
        }}
      />
      {/* Add your tab screens here */}
    </Tab.Navigator>
  );
};
