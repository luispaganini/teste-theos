import { Text } from 'react-native'
import React from 'react'
import { Container, ErrorText, InputFormContainer, InputWrapper, TitleTextInput } from './styles'

interface IInputFormProps {
    error: boolean;
    onBlur: () => void;
    onChangeText: (value: string) => void;
    value: string;
    title: string;
    errorMessage: string;
    password?: boolean;
}

export default function InputForm(props: IInputFormProps) {
    return (
        <Container>
            <InputWrapper>
                <TitleTextInput error={props.error}>{props.title}</TitleTextInput>
                <InputFormContainer
                    error={props.error}
                    onBlur={props.onBlur}
                    onChangeText={value => props.onChangeText(value)}
                    value={props.value}
                    secureTextEntry={props.password}
                />
                {props.error && <ErrorText>{props.errorMessage}</ErrorText>}
            </InputWrapper>
        </Container>
    )
}