import { TitleInitial } from './login-style'
import Button from '../../src/components/button';
import Input from '../../src/components/input'
import React from 'react';
import RadioButtonProfile from '../components/radioButtonProfile';
import { MainContainer, Formulario, SubText } from './cadastro-style';

const Cadastro:React.FC = () => {
  return (
    <MainContainer>
      <TitleInitial>Cadastre-se</TitleInitial>
      <Formulario>
        <SubText>Email</SubText>
        <Input/>
        <SubText>Nome</SubText>
        <Input/>
        <SubText>Senha</SubText>
        <Input/>
        <SubText>Confirmar senha</SubText>
        <Input/>
        <SubText>Nível de usuário</SubText>
        <RadioButtonProfile/>
      </Formulario>

      <Button variant={'primary'}>Criar</Button>

    </MainContainer>
  );
}

export default Cadastro;