import styled from "styled-components/native";
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

export const TitleInitial = styled.Text`
  fontWeight: 500;
  fontSize: 20px;
  color: #3C6E71;
  marginTop: 50px;
`

export const MainContainer = styled.View`
  height: 100%;
  justifyContent: flex-start;
  alignItems: center;
  gap: 20px;
  paddingTop: 50px;
`

export const Image = styled.Image`
  marginTop: 50px;
`
export const Formulario = styled.View`
  alignItems: flex-start;
  margin: 20px 0 50px 0;
`

export const Text = styled.Text`
  margin: 20px 0 5px 0;
`

export const TouchableOpacity = styled.TouchableOpacity`
  
`

export const TextButton = styled.Text`

`