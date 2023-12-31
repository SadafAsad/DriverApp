import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInfo } from '../slices/navSlice'

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

const SURGE_CHARGE_RATE = 1.5

const RideOptionsCard = () => {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInfo = useSelector(selectTravelTimeInfo)
    
    return (
        <SafeAreaView className='bg-white flex-1'>
            <View>
                <TouchableOpacity 
                    className='absolute top-3 left-5 p-3 rounded-full z-50'
                    onPress={() => navigation.navigate('NavigateCard')}
                >
                    <Icon name='chevron-left' type='fontawesome'/>
                </TouchableOpacity>
                <Text className='text-center py-5 text-xl'>
                    Select a Ride - {travelTimeInfo?.distance?.text}
                </Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                        className={`flex-row items-center justify-between px-10 ${item.id === selected?.id && 'bg-gray-200'}`}
                        onPress={() => {setSelected(item)}}
                    >
                        <Image 
                            source={{uri: item.image}}
                            style={{width: 80, height: 80, resizeMode: 'contain'}}
                        />
                        <View className='-ml-6'>
                            <Text className='text-xl font-semibold'>{item.title}</Text>
                            <Text>{travelTimeInfo?.duration?.text} Travel Time</Text>
                        </View>
                        <Text className='text-xl'>
                            {
                                new Intl.NumberFormat('en-ca', {
                                    style: 'currency',
                                    currency: 'CAD'
                                }).format(
                                    (travelTimeInfo?.duration.value * SURGE_CHARGE_RATE * item.multiplier) / 100
                                )
                            }
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View className='mt-auto border-t border-gray-200'>
                <TouchableOpacity 
                    className={`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
                    disabled={!selected}
                >
                    <Text className='text-center text-white text-xl'>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard