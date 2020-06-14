import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinkingConfiguration from './LinkingConfiguration';
import BottomTabNavigator from './BottomTabNavigator';
import { LoginStack } from './Stacks';

const Stack = createStackNavigator();

export default AppNavigator => (
  <NavigationContainer linking={LinkingConfiguration}>
    <Stack.Navigator>
      <Stack.Screen name="LoginStack" component={LoginStack} options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
)