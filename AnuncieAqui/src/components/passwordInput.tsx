import React from "react"
import { TextInputProps, StyleSheet } from "react-native";
import { PasswordTextInput, View } from "./passwordInput-style";
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
      <IconButton style={styles.icon} icon="eye" size={20} onPress={() => setHidden(!hidden)}/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: -5,
    top: -5,
  }
})

export default PasswordInput;