import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../screens/login";

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name={'Login'}  component={Login} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
