import styled from "styled-components/native";
import Color from "../../../enums/Color";

type ButtonProps = {
    sendStatus: boolean;
}

export const SendFormButton = styled.TouchableOpacity<ButtonProps>`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: ${Color.Blue};
    padding: 10px 20px;
    border-radius: 16px;
    margin-top: 20px;
    margin-right: 5%;
    margin-left: 5%;
    width: 90%;
    opacity: ${props => props.sendStatus ? 0.7 : 1};
`;

export const TextButton = styled.Text`
    color: ${Color.White};
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;