import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Button from "@components/Button";
import { router, Stack, Link } from "expo-router";
import Colors from "../../constants/Colors";

const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const onCreate = () => {
  //   router.push("/signUp");
  // };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        placeholder="jon@gmail.com"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.textInput}
      />
      <Button text="Sign in" />
      <Link href="/signUp">
        <Text style={styles.textButton}>Create an account</Text>
      </Link>
    </View>
  );
};

export default signIn;

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
  textButton: {
    alignSelf: "center",
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});