//Imports
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Botao from './src/components/Botao'

//Defs
const App = () => {

  const [txtPeso, setPeso] = useState('')
  const [txtAltura, setAltura] = useState('')
  const [txtImc, setImc] = useState('')

  const calculaImc = () => {
    let peso = parseFloat(txtPeso)
    let altura = parseFloat(txtAltura)

    let result = peso / (altura * altura)
    result = result.toFixed(2)

    setImc(result)
  }

  const limpar = () => {
    setAltura('')
    setPeso('')
    setImc('')
  }

  return (
    <View style={estilos.view}>

      <View style={estilos.vImg}>
        <Image style={estilos.img} source={{ uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk' }} />
      </View>

      <View style={estilos.vInput}>
        <Text style={estilos.titulo}>CALCULADORA IMC</Text>
        <Text style={estilos.medidas}>Peso em 'Kg':</Text>
        <TextInput style={estilos.TextInput} value={txtPeso} onChangeText={setPeso} />

        <Text style={estilos.medidas}>Altura:</Text>
        <TextInput style={estilos.TextInput} value={txtAltura} onChangeText={setAltura} />
      </View>

      <View style={estilos.vBotoes}>
        <Botao texto="CALCULAR" funcao={calculaImc} />
        <Botao texto="LIMPAR" funcao={limpar} />

        <Text style={estilos.imc}>{txtImc}</Text>
      </View>

    </View>
  )
}

const estilos = StyleSheet.create({
  view: {
    padding: 20,
    backgroundColor: '#606060',
    flex: 1,
    flexDirection: 'column'
  },
  vInput: {
    flex: 0.40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vBotoes: {
    flex: 0.35,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vImg: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center', //horizontal
    alignItems: 'center' //vertical
  },
  img: {
    width:120,
    height:120
  },
  texto: {
    fontSize: 25,
    color: 'black',
    fontFamily: 'AveriaLibre-Regular'
  },
  imc: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10
  },
  titulo: {
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  medidas: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginBottom: 15
  },
  TextInput: {
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: 'white',
    width: 280,
    paddingLeft: 20,
    backgroundColor: '#909090'
  },
})


//Exports
export default App