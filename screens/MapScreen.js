import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
    const navigation= useNavigation()
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
            <Text>MapScreen</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default MapScreen