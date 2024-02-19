import styled from "styled-components/native";
import Color from "../../../enums/Color";

type ITextInputProps = {
    error: boolean;
}

export const Container = styled.View`
    width: 100%;
    align-items: center;
    background-color: ${Color.White};
    margin-bottom: 20px;
`;

export const InputWrapper = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
`;

export const TitleTextInput = styled.Text<ITextInputProps>`
    width: 90%;
    flex-direction: row;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 14px;
    color: ${props => props.error ? Color.RedError : Color.Gray};
`;

export const InputFormContainer = styled.TextInput<ITextInputProps>`
    border-color: ${props => props.error ? Color.RedError : Color.Gray};
    border-width: 2px;
    border-radius: 16px;
    padding: 10px 15px;
    width: 90%;
    font-size: 14px;
    color: ${Color.Black};
`;

export const ErrorText = styled.Text`
    width: 90%;
    flex-direction: row;
    color: ${Color.RedError};
    margin-top: 5px;
    font-weight: 700;
    font-size: 14px;
`;
