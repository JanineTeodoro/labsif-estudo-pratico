import React from 'react';
import Route from "./src/routes/index"
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';


export default function App() {

  return (
      <NavigationContainer>
        <Route />
      </NavigationContainer>
)}