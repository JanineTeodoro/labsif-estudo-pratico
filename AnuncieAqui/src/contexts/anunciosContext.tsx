import React, { createContext, useContext, useState } from 'react';
import uuid from 'react-native-uuid';

type Anuncio = {
  id: string | number[];
  title: string;
  price: string;
  description: string;
  tag: string;
  image: string;
}

type AnuncioContextProps = {
  anuncios: Array<Anuncio>;
  criarAnuncio: (title, price, description, tag, image) => void;
  getAnuncio: (id) => Anuncio;
  editar: () => void;
  excluir: (id) => void;
}

const AnuncioContext = createContext<AnuncioContextProps>({
  anuncios: undefined as AnuncioContextProps["anuncios"],
  criarAnuncio: undefined as AnuncioContextProps["criarAnuncio"],
  getAnuncio: undefined as AnuncioContextProps["getAnuncio"],
  editar: undefined as AnuncioContextProps["editar"],
  excluir: undefined as AnuncioContextProps["excluir"]
});

export const AnuncioProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  const [anuncios, setAnuncios] = useState<Array<Anuncio>>([])

  const getAnuncio = (id) => {
    const anuncio = anuncios.find((anuncio) => anuncio.id === id )

    return anuncio
  }

  const criarAnuncio = (title, price, description, tag, image) => {
    setAnuncios([...anuncios,{id: uuid.v4(), title, price, description, tag, image}])
  }
  const editar = () => {}
  const excluir = (id) => {
    const newAnuncios = anuncios.filter(anuncio => anuncio.id !== id)
    setAnuncios(newAnuncios)
  }

  return (
    <AnuncioContext.Provider value={{ anuncios, criarAnuncio, getAnuncio, editar, excluir }}>
      {children}
    </AnuncioContext.Provider>
  )
}

export const useAnuncioContext = () => {
  const context = useContext(AnuncioContext)
  return {
    ...context
  }
}