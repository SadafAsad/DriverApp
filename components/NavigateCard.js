import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { Icon } from '@rneui/base'

const NavigateCard = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    return (
        <SafeAreaView className='bg-white flex-1'>
            <Text className='text-center py-5 text-xl'>Good Morning, Sadaf</Text>
            <View className='border-t border-gray-200 flex-shrink'>
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where To?'
                        debounce={400}
                        styles={{
                            container: {
                                backgroundColor: 'white',
                                paddingTop: 20,
                                flex: 0
                            },
                            textInput: {
                                backgroundColor: '#dddddf',
                                borderRadius: 0,
                                fontSize: 18
                            },
                            textInputContainer: {
                                paddingHorizontal: 20,
                                paddingBottom: 0
                            }
                        }}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: 'en'
                        }}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        returnKeyType={'search'}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        onPress={(data, details = null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description
                            }))
                            navigation.navigate('RideOptions')
                        }}
                    />
                </View>

                <NavFavourites />
            </View>

            <View className='flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100'>
                <TouchableOpacity 
                    className='flex-row bg-black w-24 px-4 py-3 rounded-full justify-between'
                    onPress={() => {navigation.navigate('RideOptions')}}
                >
                    <Icon name='car' type='font-awesome' color={'white'} size={16} />
                    <Text className='text-white text-center'>Rides</Text>
                </TouchableOpacity>
                <TouchableOpacity className='flex-row justify-between w-24 px-4 py-3 rounded-full'>
                    <Icon name='fast-food-outline' type='ionicon' color={'black'} size={16} />
                    <Text className='text-center'>Eats</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard