import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from '../screens/login-style';
import { Title, Image, Tag, Price } from './card-style';

interface CardProps extends ImageProps {
  title?: string
  tag: any
  price?: string
}

const Input: React.FC <CardProps> = ({title, source, tag, price}) => {
  return (
    <TouchableOpacity>
      <Title>{title}</Title>
      <Image source={source}/>
      <Tag>{tag}</Tag>
      <Price>{price}</Price>
    </TouchableOpacity>
  );
};

export default Input;