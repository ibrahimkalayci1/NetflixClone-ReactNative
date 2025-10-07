import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import News from '../screens/news';
import Downloads from '../screens/downloads';
import TabbarIcon from '../components/router/tabBarIcon';
import { DOWNLOADS, HOME, NEWS, SEARCH } from '../utils/routes';

const BottomTabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: 'black',
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        
        tabBarIcon: ({ size, focused, color }) => {
          return (
            <TabbarIcon
              name={route.name}
              color={color}
              size={size}
              focused={focused}
            />
          );
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={NEWS} component={News} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={DOWNLOADS} component={Downloads} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
