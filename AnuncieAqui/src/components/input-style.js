import styled from "styled-components/native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width

export const TextInput = styled.TextInput`
  borderRadius: 10px;
  width: ${windowWidth * .9}px;
  borderWidth: 1px;
  padding: 5px;
  `