import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
  Login: any;
  Cadastro: any;
  TelaInicial: any;
  AdicionarAnuncio: any;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;