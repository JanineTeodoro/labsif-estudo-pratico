import React from 'react';
import { TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native';
import { TextInput } from './input-style'

interface InputProps extends TextInputProps {
  placeholder?: string
  label?: string
  right?: any
  value?: string,
  setValue?: (text) => void
}

const Input: React.FC <InputProps> = ({placeholder, label, right, value, setValue}) => {
  return (
    <SafeAreaView>
      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        placeholder={placeholder}
        label={label}
        right={right}
      />
    </SafeAreaView>
  );
};

export default Input;