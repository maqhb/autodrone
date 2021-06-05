import React,{useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {
  Alert,
  Button,
  Linking,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';

const patientsCollection = firestore().collection('Patients');

var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
});

function GeolocationScreen({route},props) {
  const hasLocationPermission = async () => {
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  };

  const [disease,setDisease]=useState([]);
  const [location,setLocation]=useState([]);

  React.useEffect(() => {
    setDisease(route.params.disease);
    if (hasLocationPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation([position.coords.latitude,position.coords.longitude])
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  },[location[0]]);

  return (<View>
    {disease &&
  <Text>
    Disease: {disease}
  </Text>
    }
    {location &&
    <>
      <Text>
        Latitude: {location[0]}
      </Text>
      <Text>
        Longitude: {location[1]}
      </Text>
      <Button title="Confirm" disabled={!!!location[0]} icon="camera" mode="contained" onPress={() => {
      patientsCollection.add({
          name: "Ali Hamza",
          email: "alihamza@test.com",
          disease: disease,
          location: {latitude: location[0], longitude: location[1]}
        })
          .then(() => {
            Alert.alert("Added");
            setLocation([]);
          });
      }} />
    </>
    }


  </View>);
}

export default GeolocationScreen;
