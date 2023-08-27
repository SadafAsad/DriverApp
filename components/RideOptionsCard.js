import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const RideOptionsCard = () => {
    const navigation = useNavigation()
    
    return (
        <SafeAreaView className='bg-white flex-grow'>
            <View>
                <TouchableOpacity 
                    className='absolute top-3 left-5 p-3 rounded-full z-50'
                    onPress={() => navigation.navigate('NavigateCard')}
                >
                    <Icon name='chevron-left' type='fontawesome'/>
                </TouchableOpacity>
                <Text className='text-center py-5 text-xl'>Select a Ride</Text>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard