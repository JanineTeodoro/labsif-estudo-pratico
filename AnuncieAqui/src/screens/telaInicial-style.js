import styled from "styled-components/native";

export const MainContainer = styled.View`
  justifyContent: flex-start;
  alignItems: stretch;
  minHeight: 90%;
`

export const CardList = styled.View`
 width: 100%;
 gap: 20px;
 marginTop: 20px;
 marginBottom: 20px;
`

export const TouchableOpacity = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  bottom: 10px;

  zIndex: 50;
`

export const Text = styled.Text`
  fontSize: 50px;
  color: #ffffff;
  backgroundColor: #284B63;
  textAlign: center;
  width: 60px;
  height: 60px;
  borderRadius: 50px;
  lineHeight: 60px;
  border: 1px solid #ffffff;
  `