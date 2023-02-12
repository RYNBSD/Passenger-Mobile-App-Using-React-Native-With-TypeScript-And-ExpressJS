import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Passenger } from '../components/index';
import { white } from '../constants/color';

const Passengers = ({ navigation }): JSX.Element => {

  const [adult, setAdult] = useState<number>(0);
  const [child, setChild] = useState<number>(0);
  const [infant, setInfant] = useState<number>(0);

  return (
    <SafeAreaView style={styles.body}>
      <LinearGradient
        colors={["#F8A7A7", "#A993EA"]}
        style={styles.body}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="chevron-left" size={24} color={white} />
            </TouchableOpacity>
            <Text style={{ color: white, fontSize: 24, fontWeight: "700" }}>Passengers</Text>
          </View>
          <View style={styles.section}>
            <Passenger
              icon={<MaterialCommunityIcons name="airplane-takeoff" size={24} color={white} />}
              age={{
                from: null,
                to: 12,
              }}
              generation="Adult"
              quantity={adult}
              setQuantity={setAdult}
            />
            <Passenger
              icon={<MaterialCommunityIcons name="airplane-landing" size={24} color={white} />}
              age={{
                from: 2,
                to: 12,
              }}
              generation="Child"
              quantity={child}
              setQuantity={setChild}
            />
            <Passenger
              icon={<SimpleLineIcons name="people" size={24} color={white} />}
              age={{
                from: 2,
                to: null,
              }}
              generation="Infant"
              quantity={infant}
              setQuantity={setInfant}
            />
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginTop: 50
              }}
            >
              <LinearGradient
                colors={["#BCA9EB", "#5E99DC"]}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 10,
                  borderRadius: 50,
                }}
              >
                <Text style={{ color: white, fontSize: 18 }}>Done</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

export default Passengers

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: "100%",
  },
  container: {
    width: "90%",
    marginHorizontal: "5%",
  },
  header: {
    marginTop: 50,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  section: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 20,
  }
});