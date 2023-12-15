import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width
  
export const View = styled.View`
  display: flex;
  flexDirection: row;
  width: ${windowWidth * .9}px;
  border: 1px;
  borderRadius: 10px;
  padding: 5px;
`

export const PasswordTextInput = styled.TextInput`
  flex: 1;
`