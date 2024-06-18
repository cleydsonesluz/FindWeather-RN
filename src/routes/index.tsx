import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Welcome} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

export function Router() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  );
}
