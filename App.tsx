import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/styles/theme';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/HomeScreen';
import AppNavigator from './src/navigation/AppNavigator';
function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <AppNavigator />
    );
}

export default App;
