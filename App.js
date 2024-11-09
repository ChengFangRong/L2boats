import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {ScrollView} from 'react-native';
import Boat from "./components/boats"

const styles = StyleSheet.create({

  item: {
    paddingTop: 30,
    paddingBottom: 20,
    borderWidth: 2,
    backgroundColor: 'grey'
  }
});

const AllBoats = () => {
  return (
      <View>
      <ScrollView style={{padding: 15}}>

        <Text></Text>
        <Text></Text>

        <Text style={[ styles.item , {fontWeight: 'bold', textAlign: 'center', fontSize: 24, marginBottom: 20}]}>- BOATS FOR SALE -</Text>

        <View style={{marginBottom: 20}}>
        <Boat
            name="Sea Ray 500 Sundancer"
            description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
            picture={require('./img/sea_ray.jpg')}
        /></View>

        <View style={{marginBottom: 20}}>
        <Boat
            name="Four Winns Horizon 180"
            description="A sporty look and refined details truly set the Horizon 180 above all others."
            picture={require('./img/four_winns.jpg')}
        /></View>

        <View style={{marginBottom: 20}}>
        <Boat
            name="Flipper 640 ST"
            description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            picture={require('./img/flipper.jpg')}
        /></View>

        <View style={{marginBottom: 20}}>
        <Boat
            name="Princess V48"
            description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
            picture={require('./img/princess.jpg')}
        /></View>

        <View style={{marginBottom: 20}}>
        <Boat
            name="Bayliner 175 Bowrider"
            description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            picture={require('./img/bayliner.jpg')}
        /></View>

        <View style={{marginBottom: 20}}>
        <Boat
            name="Fairline Targa 47"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            picture={require('./img/fairline.jpg')}
        /></View>



      </ScrollView>
      </View>
  );
};

export default AllBoats;
