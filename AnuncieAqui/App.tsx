import React from 'react';
import Route from "./src/routes/index"
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './src/contexts/userContext';
import { AnuncioProvider } from './src/contexts/anunciosContext';


export default function App() {

  return (
    <UserProvider>
      <AnuncioProvider>
        <NavigationContainer>
          <Route />
        </NavigationContainer>
      </AnuncioProvider>
    </UserProvider>
)}