import styled from "styled-components/native";
import Color from "../../enums/Color";

export const InputsContainer = styled.ScrollView`
    width: 100%;
`;

export const FormContainer = styled.View`
    flex: 1;
    background-color: ${Color.White};
    min-height: 300px;
    height: 55%;
    width: 100%;
    padding-top: 35px;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    borderTopLeftRadius: 32px;
    borderTopRightRadius: 32px;
    padding-bottom: 30px;
`;
