import { StatusBar } from 'expo-status-bar';
import { MainContainer, TitleInitial, Image, Text, TextButton } from './telaInicial-style'
import Button from '../../src/components/button';
import Input from '../../src/components/input'
import React from 'react';
import { TouchableOpacity } from 'react-native';

const TelaInicial:React.FC = () => {
  return (
    <MainContainer>
      <TitleInitial>Bem vindo</TitleInitial>
      <Image source={require('./../../assets/teste.png')} />
      
      <Text>Email</Text>
      <Input placeholder={"email@email.com"} />
      <Text>Senha</Text>
      <Input/>
      <StatusBar style="auto" />
      <Button variant={'primary'}>Entrar</Button>
      <TouchableOpacity>
        <TextButton>Esqueci minha senha</TextButton>
      </TouchableOpacity>
      <TouchableOpacity>
        <TextButton>Criar novo cadastro</TextButton>
        </TouchableOpacity>
    </MainContainer>
  );
}

export default TelaInicial;