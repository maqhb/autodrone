import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import GeolocationScreen from "../screens/geolocation";
import Diseases from "../screens/diseases";

const Stack = createStackNavigator();

export default function AppStack() {
  useState(()=>{
  },[])

  return (
    <Stack.Navigator initialRouteName={"Diseases"}>
      <Stack.Screen name={'Geo'} component={GeolocationScreen} />
      <Stack.Screen name={'Diseases'} component={Diseases} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
});
