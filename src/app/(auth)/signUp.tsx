import { View, Text, TextInput, StyleSheet,Alert } from "react-native";
import React ,{useState} from "react";
import Button from "@components/Button";
import {Stack ,Link} from "expo-router";
import Colors from "../../constants/Colors";
import { supabase } from "../../lib/supabase";

const signUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]=useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const {error}=await supabase.auth.signUp ({email, password});
    if(error) Alert.alert(error.message)
    setLoading(false);
       
  }



//  const onSignIn=()=>{
//   router.push("/signIn")
//  }
  return (
    <View style={styles.container}>
        <Stack.Screen options={{ title: 'Sign up' }} />
      <Text style={styles.label}>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={styles.textInput} placeholder="jon@gmail.com" />
      <Text style={styles.label}>Password</Text>
      <TextInput  onChangeText={setPassword} secureTextEntry={true} style={styles.textInput} />   
      <Button onPress={signUpWithEmail} disabled={loading} text={loading?"Creating an account..":"Create an account"}/>
      {/* <Text style={styles.textButton} onPress={onSignIn}>Sign in</Text> */}
      <Link href="/signUp">
        <Text style={styles.textButton}>Sign in</Text>
      </Link>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "grey",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginTop: 5,
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 5,
  },
  textButton:{
    alignSelf:'center',
    color:Colors.light.tint,
    fontWeight:'bold'
  }
});
