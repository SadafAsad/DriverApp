import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const navigation= useNavigation()
    const Stack = createNativeStackNavigator()

    return (
        <View>
            <View className='h-1/2'>
                <Map />
            </View>

            <View className='h-1/2'>
                <Stack.Navigator>
                    <Stack.Screen name='NavigateCard' component={NavigateCard} options={{headerShown: false}}/>
                    <Stack.Screen name='RideOptions' component={RideOptionsCard} options={{headerShown: false}}/>
                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen