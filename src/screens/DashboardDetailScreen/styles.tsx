import styled from "styled-components/native";
import Color from "../../enums/Color";

export const Container = styled.ScrollView`
    flex: 1;
    width: 100%;
    background-color: ${Color.White};
`;

export const BannerContainer = styled.Image`
    width: 100%;
    height: 200px;
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    bottom: 15px;
    right: 15px;
    z-index: 1;
    width: 48px;
    height: 48px;
    background-color: ${Color.Black};
`;

export const ContainerInfoHeader = styled.View`
    background-color: ${Color.White};
    width: 100%;
    height: 97px;
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

export const OpeningCrawlText = styled.Text`
    font-size: 16px;
    font-weight: 700;
    color: ${Color.TextDark};
    padding: 0 15px;
    margin-bottom: 80px;
`;