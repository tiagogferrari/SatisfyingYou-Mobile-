import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTextInput } from '../components/CustomTextInput';
import { useState } from 'react';
import { colors } from '../constants/colors';

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
});

const ModificarPesquisa = props => {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(prev => !prev);
  };

  const Home = () => {
    props.navigation.navigate('Home');
  };

  const AcoesPesquisa = () => {
    props.navigation.navigate('AcoesPesquisa');
  };

  return (
    <ScrollView>
      <View style={styles.view}>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <CustomTextInput placeholder="Insira seu nome" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Data</Text>
            <TextInput
              style={styles.TextInput}
              placeholder="Insira a data"
              right={
                <TextInput.Icon
                  icon={() => (
                    <Fontisto name="date" size={24} color="#989897" />
                  )}
                />
              }
            />
          </View>
          <Text style={styles.label}>Imagem</Text>
          <View style={styles.addImg}>
            <Icon name="party-popper" size={45} color="#c70eb3" />
          </View>
        </View>
        <View style={styles.change}>
          <Button
            labelStyle={styles.BtnText}
            style={styles.BtnC}
            onPress={() => Home()}>
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
                onPress={toggleModal}>
                SIM
              </Button>
              <Button
                style={styles.buttonBlue}
                labelStyle={styles.buttonLabel}
                onPress={Home}>
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
