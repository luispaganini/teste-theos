import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Background from '../components/Background';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false }} />
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default AppNavigator;