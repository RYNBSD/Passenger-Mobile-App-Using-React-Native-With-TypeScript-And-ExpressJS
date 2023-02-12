import type { Dispatch, SetStateAction } from 'react';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { black, gray } from '../constants/color';

interface props {
  icon: JSX.Element,
  age: {
    from: number|null,
    to: number|null,
  },
  generation: string,
  quantity: number,
  setQuantity: Dispatch<SetStateAction<number>>
}

const Passenger = ({ icon, age, generation, quantity, setQuantity }: props): JSX.Element => {
  
  const ageRange = (): string => {
    if (age.from && age.to) {
      return `${age.from} - ${age.to} Years`;
    }
    else if (age.from) {
      return `Below ${age.from} Years`;
    }
    else {
      return `Above ${age.to} Years`;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>
        {icon}
      </Text>
      <View style={styles.body}>
        <View>
          <Text style={{ color: black, fontSize: 12, fontWeight: "400" }}>{ageRange()}</Text>
          <Text style={{ color: "#526CA0", fontSize: 20 }}>{generation}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setQuantity(prevQuantity => prevQuantity > 0 ? prevQuantity-1 : 0)} style={styles.btn}>
            <Text style={{ color: "#526CA0", fontSize: 20, fontWeight: "700" }}>-</Text>
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 20 }}>{quantity}</Text>
          <TouchableOpacity onPress={() => setQuantity(prevQuantity => prevQuantity+1)} style={styles.btn}>
            <Text style={{ color: "#526CA0", fontSize: 20, fontWeight: "700" }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Passenger

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  icon: {
    backgroundColor: "#5B97DC",
    borderRadius: 50,
    padding: 10
  },
  body: {
    width: "80%",
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: gray
  },
  btn: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#526CA0",
    borderWidth: 1,
    borderRadius: 50
  }
});