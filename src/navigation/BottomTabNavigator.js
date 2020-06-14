import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import { ProfileScreen, CardListScreen } from '../screens';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={CardListScreen}
        options={{
          title: 'QR Code',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="qrcode" />,
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
      return 'Cartão Fidelidade - QR Code'
    case 'Info':
      return 'Meus dados'
  }
}
