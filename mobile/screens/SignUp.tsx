import React, { useState, useRef } from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import PhoneInput from 'react-native-phone-input'
import { Input, Buttons } from "../components/index";
import { black, white, lightGray, gray } from "../constants/color";

const SignUp = ({ navigation }): JSX.Element => {

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("+13178675309");
  const phoneRef = useRef(undefined);

  const signUp = async (): Promise<void> => {
    const data: { name: string, email: string, password: string, phone: string } = { name, email, password, phone };

    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Context-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (!response.ok) {
      Alert.alert("Error", res.message);
      return;
    }

    Alert.alert("success", res.message);
    navigation.push("SignIn");
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={styles.header}>
          <Text style={{ fontSize: 48, fontWeight: "700", color: black }}>SignUp</Text>
        </View>
        <View style={styles.inputs}>
          <Input
            value={name}
            onChange={setName}
            placeholder="Name"
          />
          <Input
            value={email}
            onChange={setEmail}
            placeholder="Email"
          />
          <PhoneInput
            ref={phoneRef}
            initialCountry={'us'}
            initialValue="13178675309"
            value={phone}
            onChangePhoneNumber={setPhone} 
            textProps={{
              placeholder: 'Number'
            }}
            style={styles.phoneInput}
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
            currentRoute="SignUp"
            prevRoute="SignIn"
            push={navigation.push}
            action={signUp}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.push("SignIn")}>
            <Text style={{ color: black }}>Already have an account? Sing In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUp

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
    justifyContent: "center",
    alignItems: "center",
  },
  phoneInput: {
    backgroundColor: lightGray,
    color: gray,
    width: "90%",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    paddingRight: 5,
    paddingLeft: 25,
    paddingVertical: 15,
    marginBottom: 20,
    fontSize: 22,
  }
})