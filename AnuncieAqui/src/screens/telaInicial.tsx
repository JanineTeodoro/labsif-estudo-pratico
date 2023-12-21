import { TitleInitial } from './login-style'
import React from 'react';
import { MainContainer, CardList, TouchableOpacity, Text } from './telaInicial-style';
import Card from '../components/card';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../routes/stack';

const TelaInicial:React.FC = () => {

  const navigation = useNavigation<propsStack>();
  const handlePress = () => {
    navigation.navigate("AdicionarAnuncio")
  }

  return (
    <MainContainer>
      <ScrollView>
        <CardList>
          
          <Card title={'Casa moderna - venda'} source={{uri: 'https://i.imgur.com/hsEKiRT.png'}} tag='#casa #venda #sobrado' price={'R$ 500.000,00'}        
          />

          <Card title={'Casa moderna - aluguel'} source={{uri: 'https://i.imgur.com/hsEKiRT.png'}} tag='#casa #aluguel #sobrado' price={'R$ 500.000,00'}        
          />

          <Card title={'Casa moderna - aluguel'} source={{uri: 'https://i.imgur.com/hsEKiRT.png'}} tag='#casa #aluguel #sobrado' price={'R$ 500.000,00'}        
          />
          
          <Card title={'Casa moderna - aluguel'} source={{uri: 'https://i.imgur.com/hsEKiRT.png'}} tag='#casa #aluguel #sobrado' price={'R$ 500.000,00'}        
          />
        
        </CardList>
      </ScrollView>
      <TouchableOpacity onPress={handlePress}>
      <Text>+</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}

export default TelaInicial;