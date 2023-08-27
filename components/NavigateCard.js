import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'

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
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard