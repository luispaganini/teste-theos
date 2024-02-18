import { View, Text } from 'react-native'
import React from 'react'
import { TitleApplication, BackgroundContainer } from './styles';
import {titleApplication} from '../../../app.json'
interface IBackgroundProps {
    children: React.ReactNode;
}

export default function Background(props: IBackgroundProps) {
    return <BackgroundContainer>
        <TitleApplication >{titleApplication}</TitleApplication>
            {props.children}
    </BackgroundContainer>;
}