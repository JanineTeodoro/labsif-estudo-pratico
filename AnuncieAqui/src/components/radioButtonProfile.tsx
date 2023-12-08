import * as React from 'react';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RadioButtonProfile = () => {
  const [value, setValue] = React.useState('baixo');

  return (
    
    <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
      <RadioButton.Item label="Baixo nível" value="baixo" position="leading"/>
      <RadioButton.Item label="Médio nível" value="médio" position="leading"/>
      <RadioButton.Item label="Alto nível" value="alto" position="leading"/>
      
    </RadioButton.Group>
  );
};

export default RadioButtonProfile;