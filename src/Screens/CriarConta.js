import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useState } from 'react';
import { CustomTextInput } from '../components/CustomTextInput';
import { validateEmail } from '../utils/validate-email';
import { colors } from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    gap: 40,
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
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 10,
  },
  button: {
    width: '100%',
    borderRadius: 0,
    padding: 0,
    backgroundColor: colors.green,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 20,
  },
  errorMessage: {
    color: colors.red,
    fontFamily: 'AveriaLibre-Regular',
    fontSize: 16,
  },
});

const CriarConta = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSubmit = () => {
    if (!email) {
      return setEmailError('Campo de e-mail obrigatírio.');
    } else {
      setEmailError('');
    }

    if (!validateEmail(email)) {
      return setEmailError('E-mail inválido.');
    } else {
      setEmailError('');
    }

    if (!password) {
      return setPasswordError('Campo de senha obrigatírio.');
    } else {
      setPasswordError('');
    }

    if (!confirmPassword) {
      return setConfirmPasswordError('Campo de repetir senha obrigatírio.');
    } else {
      setConfirmPasswordError('');
    }

    if (password !== confirmPassword) {
      return setConfirmPasswordError('As senhas não conferem.');
    }

    props.navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.view}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>E-mail</Text>
                <CustomTextInput
                  placeholder="Insira seu e-mail"
                  onChangeText={setEmail}
                />
                <Text style={styles.errorMessage}>{emailError}</Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Senha</Text>
                <CustomTextInput
                  placeholder="Insira sua senha"
                  onChangeText={setPassword}
                />
                <Text style={styles.errorMessage}>{passwordError}</Text>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Repita senha</Text>
                <CustomTextInput
                  placeholder="Repita sua senha"
                  onChangeText={setConfirmPassword}
                />
                <Text style={styles.errorMessage}>{confirmPasswordError}</Text>
              </View>
            </View>
            <Button
              labelStyle={styles.buttonText}
              style={styles.button}
              onPress={handleSubmit}>
              CADASTRAR
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CriarConta;
