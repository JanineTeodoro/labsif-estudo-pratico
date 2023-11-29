import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width

export const ContainerButton = styled.View`
  backgroundColor: ${props => variantsBG[props.variant]};
  borderRadius: 12px;
  width: ${windowWidth * .9}px;
  borderWidth: 1px;
  borderColor: ${props => variantsBorder[props.variant]};
`;

export const Button = styled.TouchableOpacity`
  padding: 14px;
`;

export const TextButton = styled.Text`
  textAlign: center;
  color: ${props => variantsText[props.variant]};
  fontSize: 20px;
`;

const variantsBG = {
  primary: '#284B63',
  secondary: '#ffffff',
  tertiary: '#ffffff'
}

const variantsText = {
  primary: '#ffffff',
  secondary: '#B7791F',
  tertiary: '#FF0000'
}

const variantsBorder = {
  primary: '#284B63',
  secondary: '#B7791F',
  tertiary: '#FF0000'
}