import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Buttons } from "../components/index";
import { black, white } from "../constants/color";

const ResetPassword = ({ navigation }) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const resetPassword = async (): Promise<void> => {
    const data: { email: string, password: string } = { email, password };

    const response = await fetch("http://localhost:3000/auth/reset/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (!response.ok) {
      Alert.alert("Error", res.message);
      return;
    }

    Alert.alert("Success", res.message);
    navigation.push("SignIn");
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.header}>
          <Text style={{ fontSize: 40, fontWeight: "700", color: black }}>Forgot Password</Text>
        </View>
        <View style={styles.inputs}>
          <Input
            value={email}
            onChange={setEmail}
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={setPassword}
            placeholder="New password"
            secureTextEntry        
          />
        </View>
        <View>
          <Buttons
            currentRoute="UPDATE"
            prevRoute="SignIn"
            push={navigation.push}
            action={resetPassword}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexDirection: 'column',
    justifyContent: "space-around",
    backgroundColor: white
  },
  header: {
    width: "90%",
    marginHorizontal: "5%"
  },
  inputs: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end"
  },
})