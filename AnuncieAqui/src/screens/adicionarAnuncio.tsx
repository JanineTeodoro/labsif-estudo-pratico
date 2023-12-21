import { StatusBar } from 'expo-status-bar';
import { TitleInitial, Text, TextButton, Formulario } from './login-style'
import {MainContainer, Image, TextInput} from './adicionarAnuncio-style'
import Input from '../components/input'
import React, {useState} from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../routes/stack';
import * as ImagePicker from 'expo-image-picker';
import Button from '../components/button';
import { IconButton } from 'react-native-paper';

const AdicionarAnuncio:React.FC = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Você não selecionou uma imagem!');
    }
  };

  return (
    <MainContainer>
      <TitleInitial>Criar anúncio</TitleInitial>
      <ScrollView>
        <Formulario>
          <Text>Título do anúncio</Text>
          <Input/>
          <Text>Preço</Text>
          <Input placeholder={"R$"} />
          <Text>Descrição</Text>
          <TextInput
            multiline
            numberOfLines={5}
            maxLength={10}></TextInput>
          <Text>Adicionar imagem</Text>
          <IconButton icon="file-image-plus"
            onPress={pickImageAsync}
            containerColor="#D9D9D9"
            />
          {selectedImage && <Image source={{uri: selectedImage}}/>}
        </Formulario>
        <StatusBar style="auto" />
        <Button variant={'primary'}>Salvar</Button>
      </ScrollView>
    </MainContainer>
  );
}

export default AdicionarAnuncio;