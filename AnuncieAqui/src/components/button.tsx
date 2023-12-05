import React from 'react';
import { Button, ContainerButton, TextButton } from './button-style';
import { TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant: "primary" | "secondary" | "tertiary"
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