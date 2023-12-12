import React from 'react';
import { TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from './input-style'

interface InputProps extends TextInputProps {
  placeholder?: string
  label?: string
  right?: any
}

const Input: React.FC <InputProps> = ({placeholder, label, right}) => {
  return (
    <SafeAreaView>
      <TextInput
        placeholder={placeholder}
        label={label}
        right={right}
      />
    </SafeAreaView>
  );
};

export default Input;