import { View, Text, Image } from 'react-native'
import React from 'react'
import { TitleApplication, BackgroundContainer, ContainerHeader, LogoutButton } from './styles';
import { titleApplication } from '../../../app.json'
import { useAuth } from '../../context/AuthContext';
import { SvgXml } from 'react-native-svg';
import Color from '../../enums/Color';
import { logoutIcon } from '../../assets/icons/logout';

interface IBackgroundProps {
    children: React.ReactNode;
    logoutOption?: boolean;
}

export default function Background(props: IBackgroundProps) {
    const { logout } = useAuth();
    return (
        <BackgroundContainer>
            <ContainerHeader>
                <TitleApplication>{titleApplication}</TitleApplication>
                {props.logoutOption &&
                    <LogoutButton onPress={logout} >
                        <SvgXml xml={logoutIcon} width="24px" height="24px"/>
                    </LogoutButton>
                }
            </ContainerHeader>
            {props.children}
        </BackgroundContainer>
    );
}

