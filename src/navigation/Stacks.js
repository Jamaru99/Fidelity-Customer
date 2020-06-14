import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../screens'

const Stack = createStackNavigator();

export const LoginStack = () => (
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