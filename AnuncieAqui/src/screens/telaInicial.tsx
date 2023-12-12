import { TitleInitial } from './login-style'
import Button from '../../src/components/button';
import Input from '../../src/components/input'
import React from 'react';
import RadioButtonProfile from '../components/radioButtonProfile';
import { MainContainer, Image, SubText, TouchableOpacity } from './telaInicial-style';

const TelaInicial:React.FC = () => {
  return (
    <MainContainer>
      <TitleInitial>Tela Inicial</TitleInitial>
      <TouchableOpacity>
        <SubText>Casa moderna - venda</SubText>
        <Image source={require('./../../assets/casa-moderna.png')} />
        <SubText>#casa #venda #sobrado</SubText>
        <SubText>R$ 500.000,00</SubText>
      </TouchableOpacity>


    </MainContainer>
  );
}

export default TelaInicial;