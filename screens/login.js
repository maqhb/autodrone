import React,{useState,useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme, List, Divider, TextInput} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import MyContext from "../context";

function Login(props) {
  const { colors } = useTheme();
  const navigation = useNavigation();
  console.log("Login");
  const [text,setText] = useState("");
  const [password,setPassword] = useState("");
  const authContext = useContext(MyContext)
  const loginUser = () => {
    if(text==="alihamza@test.com" && password==="12345"){
      authContext.setUser({user: "Ali Hamza"})
      // navigation.navigate("Diseases")
    }
    else if(text==="admin@test.com" && password==="12345"){
      authContext.setUser({user: "admin"})
    }
  }


  return (
    <View  style={styles.container}>
      <TextInput
        label="Email"
        style={{
          height: 60,
          borderColor: 'gray',
          borderWidth: 1,
          width:320,
          placeholderTextColor: 'gray',
        }}
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Password"
        style={{
          height: 60,
          borderColor: 'gray',
          borderWidth: 1,
          width:320,
          marginTop: 20,
          placeholderTextColor: 'gray',
        }}
        value={password}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
      />
      <Button  title="Login" mode="contained" onPress={() => loginUser()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


export default Login;
