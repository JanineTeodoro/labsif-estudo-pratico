import React from 'react';
import { Button, ContainerButton, TextButton } from './button-style';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant: string
}

const ButtonDefault: React.FC <ButtonProps> = ({children, variant, onPress}) => {
  return (
    <ContainerButton variant={variant}>
      <Button onPress={onPress}>
        <TextButton variant={variant}>{children}</TextButton>
      </Button>
    </ContainerButton>
  );
};

export default ButtonDefault;