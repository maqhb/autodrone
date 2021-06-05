import React,{useState,useEffect} from "react";
import {View,Text,Alert} from "react-native";
import { useTheme, List, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";




function Patients(props) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [patientsCollection,setPatientsCollection]=useState([]);
  const [total,setTotal]=useState(0)
  async function getPatients(){
    let array = [...patientsCollection];
    await firestore().collection('Patients').get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);
        // setPatientsCollection(querySnapshot)
        querySnapshot.forEach(documentSnapshot => {
          array.push(documentSnapshot.data())
          console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        });
        setPatientsCollection(array)
      })
  }

  useEffect(()=>{
    getPatients()
  },[])



  console.log("Patients");
  return (
    <View>
      <Text style={{ fontSize: 20,color: colors.primary }}>
        Patients
      </Text>

      <List.Section>
        <List.Subheader>Patients</List.Subheader>
        <Divider />
        {patientsCollection.map((disease,index)=>{
          return(
            <List.Item key={index} title={`${disease.name} | ${disease.disease}`}  onPress={()=>{
              Alert.alert(`${disease.location.latitude} + ${disease.location.longitude} `)
            }}  />
          )}
        )
        }

      </List.Section>

    </View>
  );
}

export default Patients;
