import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

export const TitleInitial = styled.Text`
  fontWeight: 500;
  fontSize: 20px;
  color: #3C6E71;
`

export const MainContainer = styled.View`
  height: 100%;
  justifyContent: flex-start;
  alignItems: center;
  gap: 20px;
  paddingTop: 50px;
`

export const Image = styled.Image`

`

export const Text = styled.Text`

`

export const TouchableOpacity = styled.TouchableOpacity`

`

export const TextButton = styled.Text`

`