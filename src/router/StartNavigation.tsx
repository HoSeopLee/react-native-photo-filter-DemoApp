import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Router from './Router';
import {StartNavParamList} from './router.types';

const Stack = createNativeStackNavigator<StartNavParamList>();

function StartNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{animation: 'slide_from_right', headerShown: false}}>
        <Stack.Screen name="Main" component={Router} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StartNavigation;
