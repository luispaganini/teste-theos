import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Background from '../components/Background';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
                    {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
                    {/* Adicione mais telas conforme necessário */}
                </Stack.Navigator>
            </NavigationContainer>
    );
};

export default AppNavigator;