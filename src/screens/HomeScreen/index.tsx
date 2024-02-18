import { View, Text, ScrollView, TextInput, Button, Alert, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import Background from '../../components/Background'
import { useForm, Controller } from 'react-hook-form';
import { FormContainer, InputsContainer } from './style';
import Color from '../../enums/Color';
import InputForm from '../../components/Forms/InputForm';
import { titleApplication } from '../../../app.json'
import SubmitButton from '../../components/Forms/SubmitButton';

interface FormData {
    email: string;
    password: string;
}

export default function HomeScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [sendStatus, setSendStatus] = React.useState<boolean>(false)
    const onSubmit = (data: FormData) => {
        Keyboard.dismiss()
        setSendStatus(true)
        setTimeout(function () {
            // Esperando 1 segundo simulando uma API de login
            setSendStatus(false)
            // Alert.alert('Form Data', JSON.stringify(data))
            console.log(data)
        }, 1000);
    };

    return (
        <Background>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <FormContainer>
                        <InputsContainer>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputForm
                                        error={Boolean(errors.email)}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        title='Email'
                                        value={value}
                                        errorMessage={'Email inválido'}
                                    />
                                )}
                                name="email"
                                rules={{ required: true, validate: (value) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) }}
                                defaultValue=""
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <InputForm
                                        error={Boolean(errors.password)}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        title='Senha'
                                        value={value}
                                        errorMessage={'Senha inválida'}
                                        password={true}
                                    />
                                )}
                                name="password"
                                rules={{ required: true, validate: (value) => /[a-zA-Z]/.test(value) && /\d/.test(value), minLength: 5 }}
                                defaultValue=""
                            />
                        </InputsContainer>
                    <SubmitButton
                        handleSubmit={handleSubmit(onSubmit)}
                        textButton={"Acessar"}
                        textSendingButton={"Acessando"}
                        sendStatus={sendStatus}
                    />
                </FormContainer>
            </TouchableWithoutFeedback>
        </Background>
    )
}