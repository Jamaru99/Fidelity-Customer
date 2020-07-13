import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  CardListScreen,
  CameraQRScreen
} from '@screens';
import { texts } from '@utils';
import TabBarIcon from '../components/TabBarIcon';
import {
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  CARD_LIST_SCREEN,
  CAMERA_QR_SCREEN,
  PROFILE_SCREEN
} from './routes'

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export const LoginNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name={LOGIN_SCREEN}
      component={LoginScreen}
      options={{ title: texts["login:title"] }}
    />
    <Stack.Screen
      name={REGISTER_SCREEN}
      component={RegisterScreen}
      options={{ title: texts["register:title"] }}
    />
  </Stack.Navigator>
)

export function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerLeft: null
  });

  return (
    <BottomTab.Navigator initialRouteName={CARD_LIST_SCREEN}>
      <BottomTab.Screen
        name={CARD_LIST_SCREEN}
        component={CardListScreen}
        options={{
          title: 'Cartões',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="credit-card" />,
        }}
      />
      <BottomTab.Screen
        name={CAMERA_QR_SCREEN}
        component={CameraQRScreen}
        options={{
          title: 'Leitor QR',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="qrcode-scan" />,
        }}
      />
      <BottomTab.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          title: 'Info',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="information" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? ""

  switch (routeName) {
    case CARD_LIST_SCREEN:
      return texts["card_list:title"]
    case CAMERA_QR_SCREEN:
      return texts["camera_qr:title"]
    case PROFILE_SCREEN:
      return texts["profile:title"]
  }
}
