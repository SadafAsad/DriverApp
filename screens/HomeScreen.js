import { Image, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env"
import { useDispatch } from 'react-redux'
import { setOrigin, setDestination } from '../slices/navSlice'
import NavFavourites from '../components/NavFavourites'

const HomeScreen = () => {
    const dispatch = useDispatch()

    return (
        <SafeAreaView className='bg-white h-full'>
            <View className='p-5'>
                <Image 
                    source={{uri: 'https://links.papareact.com/gzs'}}
                    style={{resizeMode: 'contain', width: 100, height: 100}}
                />

                <GooglePlacesAutocomplete 
                    placeholder='Where From?'
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        }
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))
                        dispatch(setDestination(null))
                    }}  
                    fetchDetails={true}
                    returnKeyType={'search'}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                />

                <NavOptions />

                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
