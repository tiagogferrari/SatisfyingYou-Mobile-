import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTextInput } from '../components/CustomTextInput';
import { useEffect, useState } from 'react';
import { colors } from '../constants/colors';
import { db, storage } from '../firebase/config';
import { useResearches } from '../contexts/useResearches';
import { doc, updateDoc, deleteDoc, collection, where, query, getDocs } from 'firebase/firestore';
import { launchCamera } from 'react-native-image-picker';
import {
  uploadBytes,
  ref,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  change: {
    flexDirection: 'row',
  },
  errorMessage: {
    color: colors.red,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  TextInput: {
    width: '100%',
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
    fontFamily: 'AveriaLibre-Regular',
    color: 'blue',
    backgroundColor: 'white',
  },
  BtnC: {
    backgroundColor: '#37BD6D',
    borderRadius: 0,
    marginBottom: 10,
    width: 500,
    marginLeft: 88,
  },
  BtnText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  addImg: {
    alignSelf: 'flex-start',
    width: 250,
    height: 70,
    backgroundColor: 'white',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  excluir: {
    marginLeft: 640,
    fontFamily: 'AveriaLibre-Regular',
    color: 'white',
    marginTop: -19,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    gap: 20,
    marginBottom: 20,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    gap: 2,
  },
  modalContent: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    gap: 30,
    backgroundColor: colors.darkPurple,
  },
  modalButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  modalContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  buttonRed: {
    backgroundColor: colors.red,
    borderRadius: 0,
    width: '50%',
  },
  buttonBlue: {
    backgroundColor: colors.blue,
    borderRadius: 0,
    width: '50%',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  addImg: {
    justifyContent: 'center',
    width: '50%',
    height: 70,
    backgroundColor: 'white',
  },
});

const researchOpinionCollection = collection(db, 'research_opinion');

const ModificarPesquisa = props => {
  const { activeSearchId, getSearch } = useResearches();
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [dataError, setDataError] = useState('');
  const [nomeError, setNomeError] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [oldImgUrl, setOldImgUrl] = useState('');

  const toggleModal = () => {
    setOpen(prev => !prev);
  };

  const uploadNewImageAndDeleteOld = async () => {
    if (oldImgUrl === imgUrl) return imgUrl;

    const imgRef = ref(storage, `images/${activeSearchId}`);

    await deleteObject(imgRef);

    const newImgRef = ref(storage, `images/${activeSearchId}`);

    const file = await fetch(imgUrl);
    const blob = await file.blob();

    await uploadBytes(newImgRef, blob, { contentType: 'image/jpeg' });
    const newImgUrl = await getDownloadURL(imgRef);

    return newImgUrl;
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

    const docRef = doc(db, 'researches', activeSearchId);

    const newImgUrl = await uploadNewImageAndDeleteOld();

    await updateDoc(docRef, { imgUrl: newImgUrl, nome, data });

    props.navigation.navigate('Home');
  };

  const deleteResearches = async () => {
    const docRef = doc(db, 'researches', activeSearchId);
    const imgRef = ref(storage, `images/${activeSearchId}`);

    await deleteDoc(docRef)
    await deleteObject(imgRef);

    const querySnapshot = await getDocs(query(researchOpinionCollection, where('researchId', '==', activeSearchId)));

    querySnapshot.forEach(async (documento) => {
      await deleteDoc(doc(db, 'research_opinion', documento.id));
    });

    props.navigation.navigate('Home');
  };

  const addImg = () => {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then(result => {
        setImgUrl(result.assets[0].uri);
      })
      .catch(error => {
        console.log('Erro ao capturar: ' + JSON.stringify(error));
      });
  };

  useEffect(() => {
    const loadInitialSearch = async () => {
      const { nome, data, imgUrl } = await getSearch();

      setNome(nome);
      setData(data);
      setImgUrl(imgUrl);
      setOldImgUrl(imgUrl);
    };

    loadInitialSearch();
  }, []);

  return (
    <ScrollView>
      <View style={styles.view}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome {activeSearchId}</Text>
            <CustomTextInput
              placeholder="Insira seu nome"
              onChangeText={setNome}
              value={nome}
            />
            <Text style={styles.errorMessage}>{nomeError}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Insira a data"
              value={data}
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
            {imgUrl ? (
              <TouchableOpacity onPress={addImg}>
                <Image source={{ uri: imgUrl }} style={styles.image} />
              </TouchableOpacity>
            ) : (
              <View style={styles.addImg}>
                <Text style={styles.texto} onPress={addImg}>
                  Câmera/Galeria de imagens
                </Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.change}>
          <Button
            labelStyle={styles.BtnText}
            style={styles.BtnC}
            onPress={handleSubmit}>
            SALVAR
          </Button>
          <TouchableOpacity onPress={toggleModal}>
            <Icon
              name="trash-can-outline"
              size={35}
              color="white"
              marginLeft={50}
              marginTop={-5}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.excluir}>Apagar</Text>
        </View>
      </View>
      <Modal
        visible={open}
        onRequestClose={toggleModal}
        transparent
        animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Tem certeza de apagar essa pesquisa?
            </Text>
            <View style={styles.modalButtonsContainer}>
              <Button
                style={styles.buttonRed}
                labelStyle={styles.buttonLabel}
                onPress={deleteResearches}>
                SIM
              </Button>
              <Button
                style={styles.buttonBlue}
                labelStyle={styles.buttonLabel}
                onPress={toggleModal}>
                CANCELAR
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ModificarPesquisa;
