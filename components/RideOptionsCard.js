import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: 'Uber-X-123',
        title: 'UberX',
        multiplier: 1,
        image: 'https://links.papareact.com/3pn'
    },
    {
        id: 'Uber-X-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8'
    },
    {
        id: 'Uber-X-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf'
    }
]

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

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity className='flex-row items-center justify-between px-10'>
                        <Image 
                            source={{uri: item.image}}
                            style={{width: 100, height: 100, resizeMode: 'contain'}}
                        />
                        <View className='-ml-6'>
                            <Text className='text-xl font-semibold'>{item.title}</Text>
                            <Text>Travel time ...</Text>
                        </View>
                        <Text className='text-xl'>$99</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}

export default RideOptionsCard