import { RouteProp } from '@react-navigation/native';
import {  } from "./login-style";
import { useAnuncioContext } from '../contexts/anunciosContext';
import { useEffect, useState } from 'react';
import Card from '../components/card';
import { CardList } from './telaInicial-style';
import { ButtonContainer, ButtonDelete, ButtonEdit, Container, EditDeleteContainer, TextDelete, TextEdit, Image, MainContainer } from './infoAnuncio-style';
import ButtonDefault from '../components/button';
import Button from '../components/button';

type InfoAnuncioProps = {
  route: RouteProp<{ params: { id: string | number[] }}, 'params'>
}

type Anuncio = {
  id: string | number[];
  title: string;
  price: string;
  description: string;
  tag: string;
  image: string;
}

const InfoAnuncio:React.FC<InfoAnuncioProps> = ({route}) => {

  const {id} = route.params
  const [anuncio, setAnuncio] = useState<Anuncio>()
  const {getAnuncio} = useAnuncioContext()

  const comprar = () => {
    alert("Um de nossos vendedores entrará em contato!")
  }


  useEffect( () => {
    setAnuncio(getAnuncio(id))
  },[])

  return (
    <MainContainer>
      <Image source={require('./../../assets/logo.png')} />
      <Container>
        <Card title={anuncio?.title} description={anuncio?.description} cardId={anuncio?.id} tag={anuncio?.tag} source={{uri: anuncio?.image}} price={anuncio?.price}/>
        <ButtonContainer>
          <EditDeleteContainer>
            <ButtonEdit>
              <TextEdit>Editar</TextEdit>
            </ButtonEdit>
            <ButtonDelete variant={'tertiary'}>
              <TextDelete>Excluir</TextDelete>
            </ButtonDelete>
          </EditDeleteContainer>
          <Button onPress={comprar} variant={'primary'}>Comprar</Button>
        </ButtonContainer>
      </Container>
    </MainContainer>
  );
}

export default InfoAnuncio;