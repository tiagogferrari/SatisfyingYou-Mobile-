import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { CustomTextInput } from '../components/CustomTextInput';
import { colors } from '../constants/colors';
import { validateEmail } from '../utils/validate-email';

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#372775',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: '17%',
    marginBottom: 5,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
  TextInput: {
    marginBottom: 20,
    width: 500,
    height: 40,
  },
  BtnC: {
    backgroundColor: '#37BD6D',
    borderRadius: 0,
    marginBottom: 10,
    width: 500,
  },
  BtnText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: 500,
    gap: 2,
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
});

const RecuperarSenha = props => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      return setError('E-mail inválido.');
    }

    props.navigation.navigate('Login');
  };

  return (
    <View style={styles.view}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <CustomTextInput
          style={styles.TextInput}
          placeholder="Insira seu e-mail"
          onChangeText={setEmail}
        />
        <Text style={styles.errorMessage}>{error}</Text>
      </View>
      <Button
        labelStyle={styles.BtnText}
        style={styles.BtnC}
        onPress={handleSubmit}>
        RECUPERAR
      </Button>
    </View>
  );
};

export default RecuperarSenha;
