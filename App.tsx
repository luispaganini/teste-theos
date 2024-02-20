import React from 'react';
import {
    useColorScheme,
} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { MovieProvider } from './src/context/MovieContext';
function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <AuthProvider>
            <MovieProvider>
                <AppNavigator />
            </MovieProvider>
        </AuthProvider>
    );
}

export default App;
