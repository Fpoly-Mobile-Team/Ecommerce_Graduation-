import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {common} from '@screens/Common';
import React from 'react';
import {StatusBar} from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';
import { bottom } from '../screens/Bottom';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Stack.Navigator
        mode="modal"
        initialRouteName={routes.SEARCHSCREEN}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={routes.PRODUCT_DETAILS}
          component={common.PRODUCT_DETAILS}
        />
        <Stack.Screen
          name={routes.CARTSCREENS}
          component={common.CARTSCREENS}
        />
         <Stack.Screen
          name={routes.SREACHSCREEN}
          component={bottom.SEARCHSCREEN}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
