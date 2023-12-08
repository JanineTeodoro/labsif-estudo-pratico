import { StatusBar } from 'expo-status-bar';
import { MainContainer, TitleInitial, Image, Text, TextButton, Formulario } from './login-style'
import Button from '../components/button';
import Input from '../components/input'
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../routes/stack';

const Login:React.FC = () => {

  const navigation = useNavigation<propsStack>();
  const handleCreateAccount = () => {
    navigation.navigate("Cadastro")
  }
  const handleLogin = () => {
    navigation.navigate("TelaInicial")
  }

  return (
    <MainContainer>
      <TitleInitial>Bem vindo</TitleInitial>
      <Image source={require('./../../assets/teste.png')} />
      <Formulario>
        <Text>Email</Text>
        <Input placeholder={"email@email.com"} />
        <Text>Senha</Text>
        <Input/>
      </Formulario>
      <StatusBar style="auto" />
      <Button onPress={handleLogin} variant={'primary'}>Entrar</Button>
      <TouchableOpacity>
        <TextButton>Esqueci minha senha</TextButton>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateAccount}>
        <TextButton >Criar novo cadastro</TextButton>
        </TouchableOpacity>
    </MainContainer>
  );
}

export default Login;