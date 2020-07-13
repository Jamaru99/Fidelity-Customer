import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabNavigator, LoginNavigator } from './Navigators';
import { CardDetailScreen } from '@screens';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LoginNavigator" component={LoginNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="CardDetail" component={CardDetailScreen} options={{ title: "Detalhes" }} />
    </Stack.Navigator>
  </NavigationContainer>
)