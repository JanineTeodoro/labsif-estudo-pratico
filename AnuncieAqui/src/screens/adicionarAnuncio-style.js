import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width

export const MainContainer = styled.View`
  height: 100%;
  justifyContent: flex-start;
  alignItems: center;
`

export const TextInput = styled.TextInput`
  borderRadius: 10px;
  width: ${windowWidth * .9}px;
  borderWidth: 1px;
  padding: 5px;
  `

export const Image = styled.Image`
  width: ${windowWidth * .9}px;
  height: 400px;
  backgroundColor: red;
`