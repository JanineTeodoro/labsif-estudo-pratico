import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Cadastro from '../screens/cadastro';
import Login from '../screens/login';
import TelaInicial from '../screens/telaInicial';


const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Screen name="Cadastro" component={Cadastro}/>
      <Screen name="TelaInicial" component={TelaInicial}/>
    </Navigator>
  );
}