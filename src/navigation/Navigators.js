import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import { ProfileScreen, CardListScreen, CameraQRScreen } from '@screens';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '@screens';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export const LoginNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="LoginScreen"
      component={LoginScreen}
      options={{ title: "Login" }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={RegisterScreen}
      options={{ title: "Cadastrar" }}
    />
  </Stack.Navigator>
)

export function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({
    headerTitle: getHeaderTitle(route),
    headerLeft: null
  });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={CardListScreen}
        options={{
          title: 'Cartões',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="credit-card" />,
        }}
      />
      <BottomTab.Screen
        name="CameraQR"
        component={CameraQRScreen}
        options={{
          title: 'Leitor QR',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="qrcode-scan" />,
        }}
      />
      <BottomTab.Screen
        name="Info"
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
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'Home':
      return 'Meus cartões'
    case 'CameraQR':
      return 'Leitor QR'
    case 'Info':
      return 'Meus dados'
  }
}
