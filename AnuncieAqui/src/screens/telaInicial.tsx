import { TitleInitial } from './login-style'
import React from 'react';
import { MainContainer, CardList } from './telaInicial-style';
import Card from '../components/card';


const TelaInicial:React.FC = () => {
  return (
    <MainContainer>
      <TitleInitial>Tela Inicial</TitleInitial>
      <CardList>
        
        <Card title={'Casa moderna - venda'} source={{uri: 'https://i.imgur.com/hsEKiRT.png'}} tag='#casa #venda #sobrado' price={'R$ 500.000,00'}        
        />

        <Card title={'Casa moderna - aluguel'} source={{uri: 'https://i.imgur.com/hsEKiRT.png'}} tag='#casa #aluguel #sobrado' price={'R$ 500.000,00'}        
        />
      
      </CardList>
    </MainContainer>
  );
}

export default TelaInicial;