import styled from "styled-components/native";

export const MainContainer = styled.View`
  height: 100%;
  justifyContent: flex-start;
  alignItems: center;
  gap: 20px;
`

export const Image = styled.Image`
  width: 20%;
  objectFit: contain;
  flex: 1;
`

export const Container = styled.View`
  width: 100%;
  gap: 10px;
  justifyContent: space-between;
  flex: 10;
  paddingBottom: 20px;
`

export const ButtonContainer = styled.View`
  gap: 10px;
  alignItems: center;
`

export const EditDeleteContainer = styled.View`
  justifyContent: space-around;
  flexDirection: row;
  gap: 10px;
`

export const ButtonEdit = styled.TouchableOpacity`
  width: 43%;
  borderColor: #B7791F;
  borderWidth: 1px;
  borderRadius: 5px;
  backgroundColor: #ffffff;
  padding: 4px;
`

export const ButtonDelete = styled.TouchableOpacity`
  width: 43%;
  borderColor: #FF0000;
  borderWidth: 1px;
  borderRadius: 5px;
  backgroundColor: #ffffff;
  padding: 4px;
`

export const TextEdit = styled.Text`
  color: #B7791F;
  textAlign: center;
`

export const TextDelete = styled.Text`
 color: #FF0000;
 textAlign: center;
`