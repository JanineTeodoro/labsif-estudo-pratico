import React from 'react';
import { ImageProps, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from '../screens/login-style';
import { Title, Image, Tag, Price, Description } from './card-style';

interface CardProps extends ImageProps {
  cardId: string | number[]
  title?: string
  description?: string
  tag: any
  price?: string
  onPress?: any
}

const Input: React.FC <CardProps> = ({cardId, title, source, description, tag, price, onPress}) => {
  return (
    <TouchableOpacity key={cardId} onPress={onPress}>
      <Title>{title}</Title>
      <Image source={source}/>
      {description && <Description>{description}</Description>}
      <Tag>{tag}</Tag>
      <Price>{price}</Price>
      
    </TouchableOpacity>
  );
};

export default Input;