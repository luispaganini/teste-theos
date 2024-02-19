import styled from "styled-components/native";
import Color from "../../enums/Color";

export const InputsContainer = styled.ScrollView`
    width: 100%;
`;

export const LoadingContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextInfo = styled.Text`
    color: ${Color.White};
    align-self: center;
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 12px;
`;