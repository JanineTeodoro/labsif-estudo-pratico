import { TitleInitial } from './login-style'
import Button from '../../src/components/button';
import Input from '../../src/components/input'
import React, { useState } from 'react';
import RadioButtonProfile from '../components/radioButtonProfile';
import { MainContainer, Formulario, SubText } from './cadastro-style';
import PasswordInput from '../components/passwordInput';

const Cadastro:React.FC = () => {

const [password, setPassword] = useState<string>('') 
const [hidden, setHidden] = useState(true)
const [confirmPassword, setConfirmPassword] = useState<string>('') 
const [confirmHidden, setConfirmHidden] = useState(true)

  return (
    <MainContainer>
      <TitleInitial>Cadastre-se</TitleInitial>
      <Formulario>
        <SubText>Email</SubText>
        <Input/>
        <SubText>Nome</SubText>
        <Input/>
        <SubText>Senha</SubText>
        <PasswordInput
          password={password}
          setPassword={setPassword}
          setHidden={setHidden}
          hidden={hidden}/>
        <SubText>Confirmar senha</SubText>
        <PasswordInput
          password={confirmPassword}
          setPassword={setConfirmPassword}
          setHidden={setConfirmHidden}
          hidden={confirmHidden}
        />
        
        <SubText>Nível de usuário</SubText>
        <RadioButtonProfile/>
      </Formulario>

      <Button variant={'primary'}>Criar</Button>

    </MainContainer>
  );
}

export default Cadastro;