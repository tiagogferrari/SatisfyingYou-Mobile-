//Imports
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Botao from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper';
import { TextInput } from 'react-native-paper';

//Defs
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Calculadora = props => {
  const [txtPeso, setPeso] = useState('');
  const [txtAltura, setAltura] = useState('');
  const [txtImc, setImc] = useState('');

  const calculaImc = () => {
    let peso = parseFloat(txtPeso);
    let altura = parseFloat(txtAltura);

    let result = peso / (altura * altura);
    result = result.toFixed(2);

    setImc(result);
  };

  const limpar = () => {
    setAltura('');
    setPeso('');
    setImc('');
  };

  const voltar = () => {
    props.navigation.navigate('Login');
    //props.navigation.goBack() (só volta pra anterior)
  };

  return (
    <PaperProvider theme={theme}>
      <View style={estilos.view}>
        <View style={estilos.vImg}>
          <Icon name="weight" size={150} color="#000000" />
          {/* <Image style={estilos.img} source={{ uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk' }} /> */}
        </View>

        <View style={estilos.vInput}>
          <Text style={estilos.titulo}>CALCULADORA IMC</Text>

          <TextInput
            style={estilos.TextInput}
            label="Peso"
            value={txtPeso}
            onChangeText={setPeso}
            placeholder="Digite o peso em Kg"
          />

          <TextInput
            style={estilos.TextInput}
            label="Altura"
            value={txtAltura}
            onChangeText={setAltura}
            placeholder="Digite a altura"
          />

          {/* <Text style={estilos.medidas}>Peso em 'Kg':</Text>
          <TextInput style={estilos.TextInput} value={txtPeso} onChangeText={setPeso} />

          <Text style={estilos.medidas}>Altura:</Text>
          <TextInput style={estilos.TextInput} value={txtAltura} onChangeText={setAltura} /> */}
        </View>

        <View style={estilos.vBotoes}>
          <Botao texto="CALCULAR" funcao={calculaImc} />
          <Botao texto="LIMPAR" funcao={limpar} />
          <Botao texto="VOLTAR" funcao={voltar} />

          <Text style={estilos.imc}>{txtImc}</Text>
        </View>
      </View>
    </PaperProvider>
  );
};

const estilos = StyleSheet.create({
  view: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
  },
  vInput: {
    flex: 0.4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vBotoes: {
    flex: 0.35,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vImg: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center', //horizontal
    alignItems: 'center', //vertical
  },
  img: {
    width: 120,
    height: 120,
  },
  texto: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'AveriaLibre-Regular',
  },
  imc: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  titulo: {
    fontFamily: 'AveriaLibre-Italic',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  medidas: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginBottom: 15,
  },
  TextInput: {
    marginTop: 10,
    fontSize: 25,
    width: 280,
  },
});

//Exports
export default Calculadora;
