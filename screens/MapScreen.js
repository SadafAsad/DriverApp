import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
    const navigation= useNavigation()
  return (
    <View>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Text>MapScreen</Text>
        </TouchableOpacity>

        <View className='h-1/2'>

        </View>

        <View className='h-1/2'>

        </View>
    </View>
  )
}

export default MapScreen