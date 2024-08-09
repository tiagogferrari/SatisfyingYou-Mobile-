import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { CustomTextInput } from '../components/CustomTextInput';
import { colors } from '../constants/colors';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#372775',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    paddingVertical: 20,
  },
  container: {
    width: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    gap: 2,
  },
  textInput: {
    width: '100%',
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: 'AveriaLibre-Regular',
    color: colors.blue,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#37BD6D',
    borderRadius: 0,
    marginBottom: 10,
    width: 500,
  },
  buttonLabel: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  addImg: {
    justifyContent: 'center',
    width: '50%',
    height: 70,
    backgroundColor: 'white',
  },
  texto: {
    color: colors.lightGray,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 15,
    textAlign: 'center',
  },
  errorMessage: {
    color: colors.red,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
});

const NovaPesquisa = props => {
  const [data, setData] = useState('');
  const [nome, setNome] = useState('');
  const [dataError, setDataError] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [urlImg, setUrlImg] = useState('');
  const [img, setImg] = useState();

  const searchCollection = collection(db, "researches");

  const docSearch = {
    nome: nome,
    data: data
  }

  const addImg = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then(
        (result) => {
          setUrlImg(result.assets[0].uri)
          setImg(result.assets[0])
        }
      )
      .catch(
        (error) => {
          console.log("Erro ao capturar: " + JSON.stringify(error))
        }
      )
  }

  const handleSubmit = async () => {
    if (!nome) {
      return setNomeError('Campo de nome obrigatírio.');
    } else {
      setNomeError('');
    }

    if (!data) {
      return setDataError('Campo de data obrigatírio.');
    } else {
      setDataError('');
    }

    try {
      const docRef = await addDoc(searchCollection, docSearch);
      console.log("Novo documento inserido com sucesso: " + docRef.id);
    } catch (error) {
      console.log("Erro: " + JSON.stringify(error));
    }
    props.navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.view}>
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome</Text>
              <CustomTextInput
                placeholder="Insira seu nome"
                onChangeText={setNome}
              />
              <Text style={styles.errorMessage}>{nomeError}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Data</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Insira a data"
                onChangeText={setData}
                right={
                  <TextInput.Icon
                    icon={() => (
                      <Fontisto name="date" size={24} color="#989897" />
                    )}
                  />
                }
              />
              <Text style={styles.errorMessage}>{dataError}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Imagem</Text>
              <View style={styles.addImg}>
                <Text style={styles.texto} onPress={addImg}>Câmera/Galeria de imagens</Text>
              </View>
            </View>
          </View>
          <Button
            labelStyle={styles.buttonLabel}
            style={styles.button}
            onPress={handleSubmit}>
            CADASTRAR
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NovaPesquisa;
