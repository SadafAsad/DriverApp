import { Image, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
        <View className='p-5'>
            <Image 
                source={{uri: 'https://links.papareact.com/gzs'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />

        <NavOptions />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen
