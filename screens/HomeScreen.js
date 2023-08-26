import { Image, SafeAreaView, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
        <View className='p-5'>
            <Image 
                source={{uri: 'https://links.papareact.com/gzs'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen
