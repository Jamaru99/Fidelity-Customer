import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabNavigator, LoginNavigator } from './Navigators';
import { LOGIN_NAVIGATOR, BOTTOM_TAB_NAVIGATOR, CARD_DETAIL_SCREEN } from './routes';
import { CardDetailScreen } from '@screens';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={LOGIN_NAVIGATOR} component={LoginNavigator} options={{ headerShown: false }} />
      <Stack.Screen name={BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} />
      <Stack.Screen name={CARD_DETAIL_SCREEN} component={CardDetailScreen} options={{ title: "Detalhes" }} />
    </Stack.Navigator>
  </NavigationContainer>
)