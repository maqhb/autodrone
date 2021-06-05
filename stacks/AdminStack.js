import React,{useState} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import GeolocationScreen from "../screens/geolocation";
import Diseases from "../screens/diseases";
import Patients from "../screens/patients";

const Stack = createStackNavigator();

export default function AdminStack() {
  useState(()=>{
  },[])

  return (
    <Stack.Navigator initialRouteName={"Patients"}>
      <Stack.Screen name={'Patients'} component={Patients} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
});
