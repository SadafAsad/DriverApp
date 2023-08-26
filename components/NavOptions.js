import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: '123',
        title: 'Get a ride',
        image: 'https://links.papareact.com/3pn',
        screen: 'Map'
    },
    {
        id: '456',
        title: 'Order food',
        image: 'https://links.papareact.com/28w',
        screen: 'Eats'
    }
]

const NavOptions = () => {
    const navigation = useNavigation()

    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({item}) => (
                <TouchableOpacity 
                    onPress={() => navigation.navigate(item.screen)}
                    className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'
                >
                    <View>
                        <Image 
                            source={{uri: item.image}}
                            style={{width: 120, height: 120, resizeMode: 'contain'}}
                        />
                        <Text className='mt-2 text-lg font-semibold'>{item.title}</Text>
                        <View className='p-2 bg-black rounded-full w-10 mt-4'>
                            <Icon type='antdesign' color={'white'} name='arrowright' />
                        </View>
                    </View>
                </TouchableOpacity>
            )}
    />
    )
}


export default NavOptions