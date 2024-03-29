import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ActivityIndicatorComponent, SendFormButton, TextButton } from './style'
import { ActivityIndicator } from 'react-native'
import Color from '../../../enums/Color';

interface ISubmitButtonProps {
    handleSubmit: () => void;
    textButton: string;
    textSendingButton: string;
    sendStatus: boolean;
}
export default function SubmitButton(props: ISubmitButtonProps) {
    return (
        <SendFormButton onPress={props.handleSubmit} sendStatus={props.sendStatus}>
            <TextButton>
                {props.sendStatus ? props.textSendingButton : props.textButton}
            </TextButton>
            {props.sendStatus &&
                <ActivityIndicatorComponent size={22} color={Color.White} animating={props.sendStatus} />
            }
        </SendFormButton>
    )
}