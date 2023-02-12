import React from 'react'
import type { Dispatch, SetStateAction } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { lightGray, gray } from "../constants/color";

interface props {
  value: string,
  onChange: Dispatch<SetStateAction<string>>,
  placeholder: string,
  secureTextEntry?: boolean
}

const Input = ({ value, onChange, placeholder, secureTextEntry }: props): JSX.Element => {
  return (
    <TextInput
      secureTextEntry={secureTextEntry}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      style={styles.input}
    />
  );
}

export default Input

const styles = StyleSheet.create({
  input: {
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
});