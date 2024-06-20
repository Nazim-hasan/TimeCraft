import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
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
        // tabBarShowLabel: false,
        headerShown: false,
      }}
      // tabBar={renderTabBar}
    >
      <Tab.Screen
        name={CommonRoutes.Home}
        component={HomeScreen}
        // options={{
        //   tabBarIcon: () => item.icon,
        // }}
      />

      <Tab.Screen name={CommonRoutes.Trash} component={TrashScreen} />
      <Tab.Screen
        //@ts-ignore
        name={CommonRoutes.Profile}
        component={ProfileScreen}
        // options={{
        //   tabBarIcon: () => item.icon,
        // }}
      />
      {/* Add your tab screens here */}
    </Tab.Navigator>
  );
};
