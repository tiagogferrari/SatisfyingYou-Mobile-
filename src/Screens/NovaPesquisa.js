import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { CustomTextInput } from '../components/CustomTextInput';
import { colors } from '../constants/colors';
import { useState } from 'react';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase/config';
import { launchCamera } from 'react-native-image-picker';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';

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
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});

const NovaPesquisa = props => {
  const [data, setData] = useState('');
  const [nome, setNome] = useState('');
  const [dataError, setDataError] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [imageError, setImageError] = useState('');
  const [urlImg, setUrlImg] = useState('');

  const searchCollection = collection(db, 'researches');

  const addImg = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then(result => {
        setUrlImg(result.assets[0].uri);
      })
      .catch(error => {
        console.log('Erro ao capturar: ' + JSON.stringify(error));
      });
  };

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

    if (!urlImg) {
      return setImageError('Campo de imagem é obrigatírio.');
    } else {
      setDataError('');
    }

    const docRef = await addDoc(searchCollection, {
      nome: nome,
      data: data,
    });

    const imgRef = ref(storage, `images/${docRef.id}`);

    try {
      const file = await fetch(urlImg);
      const blob = await file.blob();

      await uploadBytes(imgRef, blob, { contentType: 'image/jpeg' });
      const imgUrl = await getDownloadURL(imgRef);

      await updateDoc(docRef, { imgUrl });

      console.log('Novo documento inserido com sucesso: ' + docRef.id);
      props.navigation.navigate('Home');
    } catch (error) {
      await deleteDoc(docRef);
      console.log('Erro: ' + JSON.stringify(error));
    }
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
              {urlImg ? (
                <TouchableOpacity onPress={addImg}>
                  <Image source={{ uri: urlImg }} style={styles.image} />
                </TouchableOpacity>
              ) : (
                <View style={styles.addImg}>
                  <Text style={styles.texto} onPress={addImg}>
                    Câmera/Galeria de imagens
                  </Text>
                </View>
              )}
              <Text style={styles.errorMessage}>{imageError}</Text>
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
