import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { Input, Buttons } from "../components/index";
import { black, white } from "../constants/color";
import { useAuthContext } from '../context/auth';

const SignIn = ({ navigation }): JSX.Element => {

  const { isLogin, setIsLogin } = useAuthContext()!;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (isLogin)  {
      navigation.push("Home");
    }
  }, [isLogin]);

  const signIn = async (): Promise<void> =>  {
    const data: { email: string, password: string } = { email, password };

    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      Alert.alert("Error", "Invalid email or password");
      return;
    }

    Alert.alert("Success", "Logged in successfully");
    setIsLogin(true);
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.header}>
          <Text style={{ fontSize: 48, fontWeight: "700", color: black }}>SignIn</Text>
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
            placeholder="Password"
            secureTextEntry        
          />
        </View>
        <View>
          <Buttons
            currentRoute="SignIn"
            prevRoute="SignUp"
            push={navigation.push}
            action={signIn}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.push("ResetPassword")}>
            <Text style={{ color: black }}>Forgot password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push("SignUp")}>
            <Text style={{ color: black }}>New Customer?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn

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
  footer: {
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});