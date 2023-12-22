import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Cadastro from '../screens/cadastro';
import Login from '../screens/login';
import TelaInicial from '../screens/telaInicial';
import AdicionarAnuncio from '../screens/adicionarAnuncio';
import InfoAnuncio from '../screens/infoAnuncio';


const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Screen name="Cadastro" component={Cadastro} options={{headerShown: false}} />
      <Screen name="TelaInicial" component={TelaInicial} options={{headerShown: false}}/>
      <Screen name="AdicionarAnuncio" component={AdicionarAnuncio} options={{headerShown: false}}/>
      <Screen name="InfoAnuncio" component={InfoAnuncio} options={{headerShown: false}}/>
    </Navigator>
  );
}