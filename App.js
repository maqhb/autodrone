/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native';
import 'react-native-gesture-handler'; //in main app.js
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import AuthStack from "./stacks/AuthStack";
import AppStack from "./stacks/AppStack";
import { NavigationContainer } from "@react-navigation/native";
import MyContext from "./context";
import AdminStack from "./stacks/AdminStack";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#1b3c98',
  },
};


const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  const [user,setUser] = useState(null);
  console.log(user);
  return (
    <>
      <MyContext.Provider value={{user,setUser}}>
      <SafeAreaView  style={styles.container}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
          {!user ? <AuthStack /> :
           user.user==="admin"?<AdminStack />:<AppStack />
          }
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaView>
      </MyContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex'
  },
});

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
