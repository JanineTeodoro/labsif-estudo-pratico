import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from '../screens/telaInicial';
import React from 'react';


const { Navigator, Screen } = createNativeStackNavigator();

export default function () {
  return (
    <Navigator>
      <Screen name="TelaInicial" component={TelaInicial} options={{headerShown: false}}/>
    </Navigator>
  );
}