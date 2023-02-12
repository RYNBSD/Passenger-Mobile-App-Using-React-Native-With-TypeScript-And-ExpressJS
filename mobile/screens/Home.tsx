import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Image, FlatList } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { logo } from '../constants/images'
import { deals, offers } from '../assets/DATA/data'
import { black, purple, white } from '../constants/color';

const DealsComponent = ({ item }): JSX.Element => (
  <ImageBackground source={item.img} resizeMode="cover" style={styles.deal} imageStyle={{ borderRadius: 10 }}>
    <LinearGradient colors={["transparent", "#B7BEF2"]} style={styles.glass}></LinearGradient>
    <View style={styles.dealBody}>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ color: black, fontSize: 16 }}>BEST DEALS</Text>
        <Text style={{ color: black, fontSize: 16 }}>Introducing</Text>
      </View>
      <Text style={{ color: white, fontSize: 20, width: "80%" }}>{item.title}</Text>
      <Text style={{ color: white, fontSize: 12 }}>{item.desc}</Text>
    </View>
  </ImageBackground>
);

const offersComponent = ({ item }): JSX.Element => (
  <View style={{...styles.offers, marginLeft: item === 100 ? 10 : 0}}>
    <View>
      <Text style={{ color: black, fontWeight: "700", fontSize: 16 }}>UPTO</Text>
      <Text style={{ color: black, fontWeight: "500", fontSize: 16 }}>${item} OFF*</Text>
    </View>
    <Text style={{ color: black, fontWeight: "400", fontSize: 12, marginVertical: 10 }}>On flights to all destinations in US! Book Now</Text>
    <View>
      <Text style={{ color: black, fontWeight: "400", fontSize: 16 }}>COPY CODE</Text>
      <Text style={{ color: purple, fontWeight: "700", fontSize: 16 }}>INLSWORLD</Text>
    </View>
  </View>
)

const Home = ({ navigation }): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#F2B2AF', '#B68CE1']}
        style={styles.header}
      >
        <View style={styles.h1}>
          <Text style={{ color: white, fontSize: 24, fontWeight: "700" }}>Passengers</Text>
          <MaterialCommunityIcons name="bell-ring" size={24} color={white} />
        </View>
        <View style={styles.headerLogo}>
          <TouchableOpacity onPress={() => navigation.navigate("Passengers")}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
          <Text style={{ color: white, fontSize: 20, fontWeight: "500" }}>Book Flight</Text>
        </View>
      </LinearGradient>
      <View style={styles.body}>
        <View style={{ marginTop: 50 }}>
          <FlatList
            data={deals}
            renderItem={DealsComponent}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: black, fontSize: 20 }}>Offers</Text>
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={offers}
              renderItem={offersComponent}
              keyExtractor={(item) => item}
              horizontal
            />
          </View>
        </View>        
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  header: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  h1: {
    width: "60%",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 25
  },
  headerLogo: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginBottom: 20
  },
  body: {
    width: "90%",
    marginHorizontal: "5%",
  },
  deal: {
    position: "relative",
    height: 171,
    width: 326,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  glass: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10
  },
  dealBody: {
    width: "90%",
    height: "80%",
    flexDirection: "column",
    justifyContent: 'space-between',
    alignItems: "flex-start",
  },
  offers: {
    width: 125,
    shadowColor: black,
    elevation: 5,
    backgroundColor: white,
    borderRadius: 10,
    borderTopRightRadius: 50,
    padding: 10,
    marginRight: 20,
    marginBottom: 15,
  }
});