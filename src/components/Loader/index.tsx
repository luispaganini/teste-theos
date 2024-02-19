import { View, Text, Animated, Easing } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SpinningImage } from './styles';

export default function Loader() {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        rotate();
    }, []);

    const rotate = () => {
        spinValue.setValue(0);
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(rotate);
    };

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg']
    });

    return (
        <SpinningImage source={require('../../assets/Loader.png')} style={{transform: [{ rotate: spin }]}}/>
    );
}