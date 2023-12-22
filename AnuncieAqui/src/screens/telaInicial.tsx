import { TitleInitial } from './login-style'
import React from 'react';
import { MainContainer, CardList, TouchableOpacity, Text } from './telaInicial-style';
import Card from '../components/card';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../routes/stack';
import InfoAnuncio from './infoAnuncio';
import { useUserContext } from '../contexts/userContext';
import { useAnuncioContext } from '../contexts/anunciosContext';

const TelaInicial:React.FC = () => {

  const {currentUser} = useUserContext()
  const {anuncios} = useAnuncioContext()
  const navigation = useNavigation<propsStack>();
  const handlePress = () => {
    navigation.navigate("AdicionarAnuncio")
  }

  const handlePressCard = (id) => {
    navigation.navigate("InfoAnuncio", {
      id: id
    })
  }
  console.log(anuncios)

  return (
    <MainContainer>
      <ScrollView>
        <CardList>
          {anuncios.map(anuncio => <Card cardId={anuncio.id} title={anuncio.title} source={{uri: anuncio.image}} tag={anuncio.tag} price={anuncio.price} onPress={() => handlePressCard(anuncio.id)} />
          )}
        
        </CardList>
      </ScrollView>
      {currentUser.access != "low" && <TouchableOpacity onPress={handlePress}>
      <Text>+</Text>
      </TouchableOpacity>}
    </MainContainer>
  );
}

export default TelaInicial;