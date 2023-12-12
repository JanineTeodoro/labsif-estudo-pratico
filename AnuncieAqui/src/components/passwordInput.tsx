import React from "react"
import { TextInputProps, View } from "react-native";
import { PasswordTextInput } from "./passwordInput-style";
import { IconButton } from "react-native-paper";


interface PasswordProps extends TextInputProps {
  password: string,
  hidden: boolean,
  setPassword: (value: string) => void,
  setHidden: (value: boolean) => void

}

const PasswordInput: React.FC <PasswordProps> = ({password, setPassword, hidden, setHidden}) => {
  return (
    <View>
      <PasswordTextInput
        secureTextEntry={hidden}
        value={password}
        onChangeText={password => setPassword(password) }
        />
      <IconButton icon="eye" size={20} onPress={() => setHidden(!hidden)}/>
    </View>
    
  );
};

export default PasswordInput;