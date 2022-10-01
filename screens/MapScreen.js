import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import tw from 'twrnc'
import MapView from 'react-native-maps'

import Map from '../components/Map'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../redux/navSlice'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {
  const Stack = createNativeStackNavigator()

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-0`}>
        <View style={tw`h-1/2`}>
          <Map />
        </View>
        <View style={tw`h-1/2`}>
          <Stack.Navigator>
            <Stack.Screen
              name="NavigateCard"
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MapScreen
