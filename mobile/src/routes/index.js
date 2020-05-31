import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Journey from '../pages/Journey';
import Dashboard from '../pages/Dashboard';
import Help from '../pages/Help';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardOverlayEnabled: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="help" component={Help} />
        <Stack.Screen name="journey" component={Journey} />
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
