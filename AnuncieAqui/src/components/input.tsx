import React from 'react';
import { TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from './input-style'

interface InputProps extends TextInputProps {
  placeholder?: string
}

const Input: React.FC <InputProps> = ({placeholder}) => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
};

export default Input;