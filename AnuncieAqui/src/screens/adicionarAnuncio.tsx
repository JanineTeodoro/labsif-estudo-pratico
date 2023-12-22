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
import { useAnuncioContext } from '../contexts/anunciosContext';

const AdicionarAnuncio:React.FC = () => {

  const {criarAnuncio} = useAnuncioContext()
  
  const [title, setTitle] = useState<string>()
  const [price, setPrice] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [tag, setTag] = useState<string>()
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation<propsStack>();

  const handleSave = () => {
    criarAnuncio(title, price, description, tag, selectedImage)
    navigation.navigate("TelaInicial")
  }

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
          <Input value={title} setValue={setTitle}/>
          <Text>Preço</Text>
          <Input value={price} setValue={setPrice} placeholder={"R$"} />
          <Text>Descrição</Text>
          <TextInput
            value={description}
            onChangeText={text => setDescription(text)}
            multiline
            numberOfLines={5}></TextInput>
          <Text>Tags</Text>
          <Input value={tag} setValue={setTag}/>
          <Text>Adicionar imagem</Text>
          <IconButton icon="file-image-plus"
            onPress={pickImageAsync}
            containerColor="#D9D9D9"
            />
          {selectedImage && <Image source={{uri: selectedImage}}/>}
        </Formulario>
        <StatusBar style="auto" />
        <Button variant={'primary'} onPress={handleSave}>Salvar</Button>
      </ScrollView>
    </MainContainer>
  );
}

export default AdicionarAnuncio;