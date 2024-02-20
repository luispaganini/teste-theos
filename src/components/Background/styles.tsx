import styled from "styled-components/native";
import Color from "../../enums/Color";
import { SvgXml } from "react-native-svg";

export const ContainerHeader = styled.View`
    width: 90%;
    padding: 10px;
    padding-top: 20px;
    margin-bottom: 20px;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
`;
export const TitleApplication = styled.Text`
    color: ${Color.White};
    width: 90%;
    font-size: 48px;
    font-weight: 700;
`;

export const LogoutButton = styled.TouchableOpacity`
    flex: 1;
    background-color: ${Color.White};
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
`;

export const BackgroundContainer = styled.View`
    flex: 1;
    background-color: ${Color.Primary};
`;
