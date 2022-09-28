import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import tw from 'twrnc'
import MapView from 'react-native-maps'

import Map from '../components/Map'

const MapScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-0`}>
        <View style={tw`h-1/2`}>
          <Map />
        </View>
        <View style={tw`h-1/2`}></View>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen
