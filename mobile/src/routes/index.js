import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Journey from '../pages/Journey';
import Dashboard from '../pages/Dashboard';
import Help from '../pages/Help';
import UserInfo from '../pages/UserInfo';
import FinancialInfo from '../pages/FinancialInfo';
import DreamCost from '../pages/DreamCost';

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
        <Stack.Screen name="user" component={UserInfo} />
        <Stack.Screen name="financial" component={FinancialInfo} />
        <Stack.Screen name="cost" component={DreamCost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
