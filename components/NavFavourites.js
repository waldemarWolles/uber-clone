import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import tw from 'twrnc'

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, UK',
  },
]

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, { height: 0.5 }]} />}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon style={tw`mr-4 rounded-full bg-gray-300 p-3`} name={icon} type="ionicon" color="yellow" size={18} />
          <View>
            <Text style={tw`font-semibold text-lg`}>{destination}</Text>
            <Text style={tw`text-gray-500`}>{location}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavourites
