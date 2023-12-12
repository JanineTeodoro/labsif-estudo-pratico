import { StatusBar } from 'expo-status-bar';
import { MainContainer, TitleInitial, Image, Text, TextButton, Formulario } from './login-style'
import Button from '../components/button';
import Input from '../components/input'
import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../routes/stack';
import { TextInput } from 'react-native-paper';
import PasswordInput from '../components/passwordInput';

const Login:React.FC = () => {

  const navigation = useNavigation<propsStack>();
  const handleCreateAccount = () => {
    navigation.navigate("Cadastro")
  }
  const handleLogin = () => {
    navigation.navigate("TelaInicial")
  }

  const [password, setPassword] = useState<string>('') 
  const [hidden, setHidden] = useState(true)

  return (
    <MainContainer>
      <TitleInitial>Bem vindo</TitleInitial>
      <Image source={require('./../../assets/logo.png')} />
      <Formulario>
        <Text>Email</Text>
        <Input placeholder={"email@email.com"} />
        <Text>Senha</Text>
      <PasswordInput
      password={password}
      setPassword={setPassword}
      setHidden={setHidden}
      hidden={hidden}
      />
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