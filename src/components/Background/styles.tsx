import styled from "styled-components/native";
import Color from "../../enums/Color";


export const TitleApplication = styled.Text`
    color: ${Color.White};
    width: 90%;
    font-size: 48px;
    font-weight: 700;
    padding: 10px;
    padding-top: 20px;
    margin-bottom: 20px;
    align-self: center;
`;

export const BackgroundContainer = styled.View`
    flex: 1;
    background-color: ${Color.Primary};
`;
