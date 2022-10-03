import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'

import { setDestination, setOrigin } from '../redux/navSlice'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = () => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />

        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            text: {
              fontSize: 18,
            },
          }}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(setDestination(null))
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            )
          }}
          fetchDetails={true}
          returnKeyType={'Search'}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
