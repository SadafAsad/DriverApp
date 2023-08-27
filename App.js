import { Provider } from 'react-redux';
import { store } from './store'
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import { KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <Stack.Navigator>
              <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
              <Stack.Screen name='Map' component={MapScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
