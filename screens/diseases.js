import React from "react";
import {View,Text} from "react-native";
import { useTheme, List, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ArrayDiseases = ["Fever","Headache","Malaria","Cough"];


const ListDiseases = ({navigation}) => (
  <List.Section>
    <List.Subheader>Diseases</List.Subheader>
    <Divider />
    {ArrayDiseases.map((disease,index)=>{
    return(
      <List.Item key={index} title={disease}  onPress={()=>{
      console.log({disease});
      navigation.navigate("Geo",{disease});
      }}  />
    )}
      )
    }

    {/*<List.Item*/}
    {/*  title="Second Item"*/}
    {/*  left={() => <List.Icon color="#000" icon="folder" />}*/}
    {/*/>*/}
  </List.Section>
);

function Diseases(props) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  console.log("HERE");
  return (
    <View>
      <Text style={{ fontSize: 20,color: colors.primary }}>
        Diseases
      </Text>
      <ListDiseases navigation={navigation} />
    </View>
  );
}

export default Diseases;
