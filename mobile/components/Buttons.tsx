import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';

import { white, black } from "../constants/color";

interface props {
  currentRoute: string,
  prevRoute: string,
  push: any,
  action: () => {}
}

const Buttons = ({ currentRoute, prevRoute, push, action }: props): JSX.Element => {
  return (
    <>
      <TouchableOpacity onPress={action}>
        <LinearGradient
          colors={['#F2B2AF', '#B68CE1']}
          style={styles.gradient}
        >
          <Text style={styles.current}>{currentRoute}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.route} onPress={() => push(prevRoute)}>
        <AntDesign name="close" size={32} color={black} />
      </TouchableOpacity>
    </>
  )
}

export default Buttons

const styles = StyleSheet.create({
  gradient: {
    width: "40%",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: 10,
    paddingLeft: 30,
    marginBottom: 20,
    shadowColor: black,
    elevation: 10
  },
  current: {
    color: white,
    fontSize: 28,
    fontWeight: "500"
  },
  route: {
    backgroundColor: white,
    width: "20%",
    shadowColor: black,
    elevation: 10,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: 10,
    paddingLeft: 25,
    marginBottom: 20,
  }
});