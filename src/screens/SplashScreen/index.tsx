import { Text, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../components/Background'
import Loader from '../../components/Loader'
import DeviceInfoModule from '../../modules/DeviceInfoModule';
import { LoadingContainer, TextInfo } from './styles';
import { INavigationInterface } from '../../modules/INavigationInterface';
import { useFocusEffect } from '@react-navigation/native';

export default function SplashScreen({ navigation }: INavigationInterface) {
    const DeviceInfo = DeviceInfoModule;
    const [appVersion, setAppVersion] = useState('');
    const [androidVersion, setAndroidVersion] = useState('');
    const [deviceModel, setDeviceModel] = useState('');
    const [text, setText] = useState('Carregando');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setText(prevText => {
                if (prevText.endsWith('...'))
                    return 'Carregando';

                return prevText + '.';
            });
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const timeoutId = setTimeout(() => {
                navigation.navigate('Home');
            }, 5000);

            return () => clearTimeout(timeoutId);
        }, [])
    );

    useEffect(() => {
        if (Platform.OS == 'android') {
            const androidData = async () => {
                setAppVersion("Versão: " + await DeviceInfo.getAppVersion());
                setAndroidVersion(" - " + await DeviceInfo.getAndroidVersion());
                setDeviceModel(" - " + await DeviceInfo.getDeviceModel());
            }
            androidData();
        }
    }, []);

    return (
        <Background>
            <LoadingContainer>
                <Loader />
                <TextInfo>{text}</TextInfo>
            </LoadingContainer>

            <TextInfo>
                {appVersion}{androidVersion}{deviceModel}
            </TextInfo>
        </Background>
    )
}