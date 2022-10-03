import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-X-456',
    title: 'UberX',
    multiplier: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-X-789',
    title: 'UberX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
]

const RideOptionsCard = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={''}>
        <TouchableOpacity onPress={() => navigation.navigate('NavigateCard')} style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View>
              <Text>{title}</Text>
              <Text>Ttravel time...</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

export default RideOptionsCard
