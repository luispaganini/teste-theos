import styled from "styled-components/native";
import Color from "../../../enums/Color";

export const Container = styled.TouchableOpacity`
    flex: 1;
    width: 90%;
    align-self: center;
`;

export const Banner = styled.Image`
    width: 100%;
    height: 200px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

type ContainerDataProps = {
    existsImage: boolean;
}

export const ContainerData = styled.View<ContainerDataProps>`
    background-color: ${Color.White};
    width: 100%;
    height: 97px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: ${props => props.existsImage ? '0px' : '10px'};
    border-top-left-radius: ${props => props.existsImage ? '0px' : '10px'};
    padding: 12px;
    justify-content: space-between;
    margin-bottom: 12px
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    flex-shrink: 1;
    color: ${Color.TextDark};
`;


export const DetailsMovie = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;  

export const AuthorNameText = styled.Text`
    font-size: 14px;
    font-weight: 700;
    flex-shrink: 1;
    color: ${Color.TextDark};
`;

export const YearText = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: ${Color.GrayText};
`;